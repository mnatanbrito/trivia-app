import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import defaultStyles from '../../defaultStyles';
import colors from '../../colors';

const styles = StyleSheet.create({
  centeredContainer: {
    paddingVertical: 45,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

type ContainerProps = {
  loading?: boolean;
  overrideStyle?: any;
};

const Container: React.FC<ContainerProps> = ({
  loading = false,
  overrideStyle,
  children,
}) => {
  if (loading) {
    return (
      <View
        style={[
          defaultStyles.container,
          styles.centeredContainer,
          overrideStyle,
        ]}
      >
        <ActivityIndicator size={64} color={colors.GRAY} />
      </View>
    );
  }
  return (
    <View
      style={[defaultStyles.container, styles.centeredContainer, overrideStyle]}
    >
      {children}
    </View>
  );
};

export default Container;
