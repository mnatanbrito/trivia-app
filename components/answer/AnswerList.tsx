import React from 'react';
import { FlatList } from 'react-native';

import Answer from './Answer';
import AnswerCard from './AnswerCard';

type AnswerListProps = {
  answers: Answer[];
};

const AnswerList: React.FC<AnswerListProps> = ({ answers }) => (
  <FlatList
    data={answers}
    keyExtractor={(item) => item.question}
    renderItem={({ item }) => (
      <AnswerCard
        key={item.question}
        question={item.question}
        isCorrectAnswer={item.isCorrectAnswer}
      />
    )}
  />
);

export default AnswerList;
