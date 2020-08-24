import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Question from './Question';
import Card from '../shared/Card';
import colors from '../../colors';

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 22,
    color: colors.DARKEST_GREEN,
    fontWeight: '600',
    marginBottom: 30,
    width: '85%',
    textAlign: 'center',
  },
  question: {
    fontSize: 32,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    width: '80%',
  },
  choicesContainer: {
    height: 85,
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: -1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  choiceLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: colors.LIGHT_GRAY,
    borderWidth: 1,

    borderBottomLeftRadius: 20,
  },
  choiceRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: colors.LIGHT_GRAY,
    borderWidth: 1,

    borderBottomRightRadius: 20,
  },
  choiceText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.DARKER_GREEN,
  },
});

type ChoicesProps = {
  onChoose: (value: string) => void;
};

const Choices: React.FC<ChoicesProps> = ({ onChoose }) => (
  <View style={styles.choicesContainer}>
    <TouchableOpacity
      style={styles.choiceLeft}
      onPress={() => onChoose('False')}
    >
      <Text style={styles.choiceText}>False</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.choiceRight}
      onPress={() => onChoose('True')}
    >
      <Text style={styles.choiceText}>True</Text>
    </TouchableOpacity>
  </View>
);

type QuestionCardProps = {
  onChoose: (value: string) => void;
};

type FinalProps = QuestionCardProps & Question;

const QuestionCard: React.FC<FinalProps> = ({
  category,
  question,
  onChoose,
}) => {
  return (
    <Card>
      <Text style={styles.cardTitle}>{category}</Text>
      <Text style={styles.question}>{question}</Text>
      <Choices onChoose={onChoose} />
    </Card>
  );
};

export default QuestionCard;
