import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../reducers';
import { fetchTrivia, GameSlice } from '../game/slice'
import defaultStyles from '../../defaultStyles';
import colors from '../../colors';
import Button from '../shared/Button';
import Container from '../shared/Container';

const styles = StyleSheet.create({
  welcomeBlock: {
    alignItems: 'center',
  },
  welcomeIntro: {
    fontSize: 32,
    color: colors.GRAY,
  },
  trivia: {
    fontSize: 42,
    color: colors.PRIMARY_GREEN,
    fontWeight: '800',
  },
  challenge: {
    fontSize: 42,
    color: colors.DARKER_GREEN,
    fontWeight: '800',
  },
  instructions: {
    fontSize: 22,
    color: colors.GRAY,
    textAlign: 'center',
    width: '61%',
    lineHeight: 32,
  },
  question: {
    fontSize: 22,
    color: colors.DARKER_GREEN,
    textAlign: 'center',
    width: '61%',
  },
  beginContainer: {
    width: '80%',
  },
});

export default function Welcome() {
  const dispatch = useDispatch()
  const gameSlice = useSelector((state: RootState) => state.game) as GameSlice;
  const navigation = useNavigation();

  const onBegin = () => {
    dispatch(fetchTrivia());
  };

  useEffect(() => {
    if(gameSlice.hasFetched) {
      if(!gameSlice.fetchError) {
        navigation.navigate('Game');
      }
      else {
        /* show error feedback */
      }
    }
  }, [gameSlice.hasFetched, gameSlice.fetchError])

  return (
    <Container>
      <View style={styles.welcomeBlock}>
        <Text style={styles.welcomeIntro}>Welcome to the</Text>
        <View style={defaultStyles.inline}>
          <Text style={styles.trivia}>Trivia </Text>
          <Text style={styles.challenge}>Challange</Text>
        </View>
      </View>
      <Text style={styles.instructions}>
        You will be presented with 10 True or False questions.
      </Text>
      <Text style={styles.question}>Can you score 100%?</Text>
      <View style={styles.beginContainer}>
        <Button text="Begin" loading={gameSlice.isFetching} onPress={onBegin} />
      </View>
    </Container>
  );
}
