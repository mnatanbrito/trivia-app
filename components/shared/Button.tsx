import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    height: 55,
    width: '100%',
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '800',
  },
});

type ButtonProps = {
  bg?: string;
  color?: string;
  text: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({
  bg = colors.PRIMARY_GREEN,
  color = 'white',
  text,
  onPress,
}) => (
  <TouchableOpacity
    style={[
      styles.button,
      {
        backgroundColor: bg,
      },
    ]}
    activeOpacity={0.8}
    onPress={onPress}
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

export default Button;
