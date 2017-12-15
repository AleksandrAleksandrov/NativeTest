import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TopStepCurrent } from '../../Components/TopStepCurrent'
import { TopStep } from '../../Components/TopStep'
import { LineBetweenSteps } from '../../Components/LineBetweenSteps'

const styles = {
  containerMain: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 23,
    backgroundColor: 'rgba(0,0,0,0)',
    fontWeight: 'bold',
    marginTop: 16,
  },
  circleStyle: {
    width: 53,
    height: 53,
  },
};

const CircleHeader = () => {
  return (
    <View>
      <View style={styles.containerMain}>
        <TopStep step={2}/>
        <LineBetweenSteps/>
        <TopStepCurrent step={3}/>
        <LineBetweenSteps/>
        <TopStep step={4}/>
      </View>
      <Text style={styles.buttonText}>
        Focus rating
      </Text>
    </View>
  );
};

export default CircleHeader;
