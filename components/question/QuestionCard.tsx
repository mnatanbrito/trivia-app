import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Question from './Question';
import Card from '../shared/Card';

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 22,
    color: '#2F855A',
    fontWeight: '600',
    marginBottom: 30,
  },
  question: {
    fontSize: 32,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    width: '80%'
  }
});

const QuestionCard: React.FC<Question> = ({ category, question }) => {
  return (
    <Card>
      <Text style={styles.cardTitle}>{category}</Text>
      <Text style={styles.question}>{question}</Text>
      
    </Card>
  );
};

export default QuestionCard;
