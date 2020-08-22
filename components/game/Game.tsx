import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Results } from '../../routeNames';
import { RootState } from '../../reducers';
import { questionsSelector, GameSlice, answerQuestion } from './slice';
import Container from '../shared/Container';
import defaultStyles from '../../defaultStyles';
import QuestionCard from '../question/QuestionCard';
import QuestionCounter from '../question/QuestionCounter';

export default function Game() {
  let questionsListRef: any;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const gameSlice = useSelector((state: RootState) => state.game) as GameSlice;
  const questions = questionsSelector(gameSlice as GameSlice);

  const onChoose = (answer: string) => {
    dispatch(answerQuestion(answer));
  };

  useEffect(() => {
    if (gameSlice.currentQuestion > 0 && questionsListRef) {
      if (gameSlice.currentQuestion < gameSlice.questions.length) {
        questionsListRef.scrollToIndex({
          animated: true,
          index: gameSlice.currentQuestion,
        });
      } else {
        navigation.navigate(Results);
      }
    }
  }, [questionsListRef, gameSlice.currentQuestion]);

  return (
    <Container>
      <FlatList
        ref={(ref) => {
          questionsListRef = ref;
        }}
        horizontal
        scrollEnabled={false}
        style={defaultStyles.container}
        data={questions}
        keyExtractor={(item) => item.question}
        renderItem={({ item }) => (
          <QuestionCard {...item} onChoose={onChoose} />
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />

      <QuestionCounter
        current={gameSlice.currentQuestion + 1}
        total={gameSlice.questions.length}
      />
    </Container>
  );
}
