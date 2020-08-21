import React from 'react';
import { View, StyleSheet } from 'react-native';

import defaultStyles from '../../defaultStyles';

const styles = StyleSheet.create({
  centeredContainer: {
    paddingVertical: 45,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const Container: React.FC<any> = (props) => {
  return (
    <View style={[defaultStyles.container, styles.centeredContainer]}>
      {props.children}
    </View>
  );
};

export default Container;
