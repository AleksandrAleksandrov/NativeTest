import React from 'react'
import { View, Text, Platform } from 'react-native'

const styles = {
  circleStyle: {
    width: 53,
    height: 53,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    marginRight: 3,
    borderRadius: Platform.OS === 'ios' ? 53 / 2 : 53,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FE9B8C',
    fontSize: 22,
  },
};

const TopStepCurrent = ({ step }) => (

  <View style={styles.circleStyle}>
    <Text style={ styles.buttonText }>
      {step}
    </Text>
  </View>
);

export { TopStepCurrent };
