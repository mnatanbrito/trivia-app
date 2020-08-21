import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

import colors from '../../colors';

const styles = StyleSheet.create({
  card: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 20,
    height: '70%',
    shadowColor: '#4A5568',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

const Card: React.FC<any> = ({ bg = colors.PRIMARY_GREEN, children }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        width,
        height,
        alignItems: 'center',
      }}
    >
      <View
        style={[
          styles.card,
          {
            width: width - 60,
            height: height * 0.61,
            backgroundColor: bg,
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
};

export default Card;
