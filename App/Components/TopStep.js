import React from 'react'
import { View, Text, Platform } from 'react-native'

const styles = {
  circleStyle: {
    width: 53,
    height: 53,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginLeft: 3,
    marginRight: 3,
    borderColor: '#fff',
    borderRadius: Platform.OS === 'ios' ? 53 / 2 : 53,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(254, 109, 116)',
    fontSize: 22,
  },
};

const TopStep = ({ step }) => (
  <View style={styles.circleStyle}>
    <Text style={styles.buttonText}>
      {step}
    </Text>
  </View>
);

export { TopStep };
