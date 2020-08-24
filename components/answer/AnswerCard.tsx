import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Answer from './Answer';
import colors from '../../colors';

type AnswerCardProps = Answer;

const styles = StyleSheet.create({
  answerCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    minHeight: 55,
    marginBottom: 15,
  },
  iconColumn: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 5,
  },
  questionColumn: {
    flex: 8,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  question: {
    fontSize: 22,
    color: colors.GRAY,
    textAlign: 'left'
  }
});

const AnswerCard: React.FC<AnswerCardProps> = ({
  question,
  isCorrectAnswer,
}) => {
  return (
    <View style={styles.answerCard}>
      <View style={styles.iconColumn}>
        <Text>{isCorrectAnswer ? '✅' : '❌'}</Text>
      </View>
      <View style={styles.questionColumn}>
        <Text style={styles.question}>{question}</Text>
      </View>
    </View>
  );
};

export default AnswerCard;
