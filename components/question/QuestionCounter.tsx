import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../colors';

type QuestionCounterProps = {
  current: number;
  total: number;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: colors.GRAY,
  },
});

const QuestionCounter: React.FC<QuestionCounterProps> = ({
  current,
  total,
}) => {
  return <Text style={styles.text}>{`${current} of ${total}`}</Text>;
};

export default QuestionCounter;
