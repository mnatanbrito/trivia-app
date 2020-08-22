import { map } from 'lodash';
import { AxiosResponse } from 'axios';

import { decodeHtml } from '../../shared/utils/htmlDecoder';
import api from '../../shared/services/triviaApi';
import Question from '../question/Question';

export const getTrivia = () => {
  return api
    .get('/api.php', {
      params: {
        amount: 10,
        difficulty: 'hard',
        type: 'boolean',
      },
    })
    .then((res: AxiosResponse) => {
      return res.data.results;
    })
    .then((results: any[]) => {
      return map<any, Question>(results, (question: any, index: number) => ({
        category: question.category,
        type: question.type,
        difficulty: question.difficulty,
        question: decodeHtml(question.question),
        correctAnswer: question.correct_answer,
        incorrectAnswers: question.incorrect_answers,
      })) as Question[];
    });
};
