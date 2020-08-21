import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../../reducers';
import { questionsSelector, GameSlice } from './slice';
import Container from '../shared/Container';
import defaultStyles from '../../defaultStyles';
import QuestionCard from '../question/QuestionCard';

export default function Game() {
  const gameSlice = useSelector((state: RootState) => state.game);
  const questions = questionsSelector(gameSlice as GameSlice);

  return (
    <Container>
      <FlatList
        horizontal
        scrollEnabled={false}
        style={defaultStyles.container}
        data={questions}
        keyExtractor={(item) => item.question}
        renderItem={({ item }) => <QuestionCard {...item} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
