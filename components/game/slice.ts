import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { filter, map } from 'lodash';

import { AppThunk } from '../../store';
import { getTrivia } from './service';
import Question from '../question/Question';

export type GameSlice = {
  started: boolean;
  currentQuestion: number;
  questions: Question[];
  isFetching: boolean;
  hasFetched: boolean;
  fetchError: string;
};

const initialState: GameSlice = {
  started: false,
  currentQuestion: 0,
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
      state.questions = [];
      state.isFetching = false;
      state.hasFetched = false;
      state.fetchError = '';
    },
    fetchStarted(state, action) {
      state.isFetching = true;
      state.hasFetched = false;
      state.fetchError = '';
    },
    fetchSucceeded(state, action: PayloadAction<Question[]>) {
      const questions = action.payload;

      state.started = true;
      state.currentQuestion = 0;

      state.isFetching = false;
      state.hasFetched = true;
      state.questions = questions;
    },
    fetchFailed(state, action: PayloadAction<string>) {
      const error = action.payload;

      state.isFetching = false;
      state.hasFetched = true;
      state.fetchError = error;
    },
    answerQuestion(state, action: PayloadAction<string>) {
      const answer = action.payload;

      const questionInSlice = state.questions[state.currentQuestion];
      if (questionInSlice) {
        questionInSlice.answer = answer;

        state.currentQuestion += 1;
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

export const correctAnswersCountSelector = createSelector(
  (state: GameSlice) => state.questions,
  (items: Question[]) =>
    filter(items, (question) => question.answer === question.correctAnswer)
      .length
);

export const answerListSelector = createSelector(
  (state: GameSlice) => state.questions,
  (items: Question[]) =>
    map(items, (q) => ({
      question: q.question,
      isCorrectAnswer: q.answer === q.correctAnswer,
    }))
);
