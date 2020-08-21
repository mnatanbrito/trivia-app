import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

import { AppThunk } from '../../store';
import { getTrivia } from './service';
import Question from '../question/Question';

export type GameSlice = {
  started: boolean;
  currentQuestion: number;
  correctAnswerCount: number;
  questions: Question[];
  isFetching: boolean;
  hasFetched: boolean;
  fetchError: string;
};

const initialState: GameSlice = {
  started: false,
  currentQuestion: 0,
  correctAnswerCount: 0,
  questions: [],
  isFetching: false,
  hasFetched: false,
  fetchError: '',
};

const gameSlice: any = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame(state) {
      state.started = false;
      state.currentQuestion = 0;
      state.correctAnswerCount = 0;
    },
    fetchStarted(state, action) {
      state.isFetching = true;
      state.hasFetched = false;
      state.fetchError = '';
    },
    fetchSucceeded(state, action: PayloadAction<Question[]>) {
      const questions = action.payload;

      console.log(`fetchSucceeded = ${typeof questions}`);

      state.started = true;
      state.currentQuestion = 0;

      state.isFetching = false;
      state.hasFetched = true;
      state.questions = questions;
    },
    fetchFailed(state, action: PayloadAction<{ error: string }>) {
      const { error } = action.payload;
      state.isFetching = false;
      state.hasFetched = true;
      state.fetchError = error;
    },
    answerQuestion(state, action: PayloadAction<{ answer: string }>) {
      const { answer } = action.payload;

      const questionInSlice = state.questions[state.currentQuestion];
      if (questionInSlice) {
        const isRightAnswer = questionInSlice.correctAnswer === answer;
        if (isRightAnswer) {
          state.correctAnswerCount++;
        }

        state.currentQuestion++;
      }
    },
  },
});

const { fetchStarted, fetchSucceeded, fetchFailed } = gameSlice.actions;

export const { resetGame, answerQuestion } = gameSlice.actions;

export default gameSlice.reducer;

export const fetchTrivia = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const questions = await getTrivia();
    dispatch(fetchSucceeded(questions));
  } catch (err) {
    dispatch(fetchFailed(err.toString()));
  }
};

export const questionsSelector = createSelector(
  (state: GameSlice) => state.questions,
  (items: Question[]) => items
);
