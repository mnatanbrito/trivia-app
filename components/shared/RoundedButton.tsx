import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

type RoundedButtonProps = {
  bg: string;
  color: string;
  text: string;
};

const RoundedButton: React.FC<RoundedButtonProps> = ({
  bg = colors.PRIMARY_GREEN,
  color = 'white',
  text,
}) => (
  <TouchableOpacity
    style={[
      styles.button,
      {
        backgroundColor: bg,
      },
    ]}
  >
    <Text
      style={[
        styles.buttonText,
        {
          color,
        },
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

export default RoundedButton;
