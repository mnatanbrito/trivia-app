import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

import colors from '../../colors';

const styles = StyleSheet.create({
  card: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: colors.DARKEST_GREEN,
    paddingTop: 35,
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
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={[
          styles.card,
          {
            width: width - 60,
            height: 'auto',
            minHeight: height * 0.58,
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
