import React from 'react'
import { View, Text, Platform } from 'react-native'

const styles = {
  buttonText: {
    textAlign: 'center',
    color: '#FE9B8C',
    fontSize: 22,
  },
};

const TopStepCurrent = ({ step, size }) => (

  <View
    style={{
      width: size,
      height: size,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 3,
      marginRight: 3,
      borderRadius: Platform.OS === 'ios' ? size / 2 : size,
    }}
  >
    <Text style={ styles.buttonText }>
      {step}
    </Text>
  </View>
);

export { TopStepCurrent };
