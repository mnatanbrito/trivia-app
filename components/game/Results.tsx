import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, CommonActions } from '@react-navigation/native';

import {
  questionsSelector,
  GameSlice,
  correctAnswersCountSelector,
  answerListSelector,
  resetGame,
} from './slice';
import { RootState } from '../../reducers';
import colors from '../../colors';
import Container from '../shared/Container';
import Button from '../shared/Button';
import AnswerList from '../answer/AnswerList';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  resultsTitleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  resultsTitle: {
    fontSize: 32,
    color: colors.GRAY,
    fontWeight: '600',
  },
  resultsContainer: {
    maxHeight: height * 0.66,
    width: '85%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: colors.DARKEST_GREEN,
    marginBottom: 30,

    shadowColor: colors.GRAY,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  playAgainContainer: {
    width: '80%',
  },
  playAgainTitle: {
    fontSize: 32,
    color: colors.PRIMARY_GREEN,
    fontWeight: '600',
  },
});

const Results: React.FC<any> = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const gameSlice = useSelector((state: RootState) => state.game) as GameSlice;
  const questions = questionsSelector(gameSlice);
  const score = correctAnswersCountSelector(gameSlice);
  const answers = answerListSelector(gameSlice);

  const onPlayAgain = () => {
    dispatch(resetGame());
  };

  useEffect(() => {
    let timeout: any;
    if (!gameSlice.hasFetched) {
      timeout = setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'Game',
              },
            ],
          })
        );
      }, 800);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [gameSlice.hasFetched]);

  if (!gameSlice.started) {
    return (
      <Container>
        <Text style={styles.playAgainTitle}>Let's play again 😋</Text>
      </Container>
    );
  }

  return (
    <Container loading={!gameSlice.hasFetched}>
      <View style={styles.resultsTitleWrapper}>
        <Text style={styles.resultsTitle}> You scored</Text>
        <Text style={styles.resultsTitle}>
          {`${score} / ${questions.length}`}
        </Text>
      </View>

      <View style={styles.resultsContainer}>
        <AnswerList answers={answers} />
      </View>

      <View style={styles.playAgainContainer}>
        <Button text="Play again?" loading={false} onPress={onPlayAgain} />
      </View>
    </Container>
  );
};

export default Results;
