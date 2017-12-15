import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TopStepCurrent } from '../../Components/TopStepCurrent'
import { TopStep } from '../../Components/TopStep'
import { LineBetweenSteps } from '../../Components/LineBetweenSteps'

const styles = {
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 23,
    backgroundColor: 'rgba(0,0,0,0)',
    fontWeight: 'bold',
    marginTop: 16,
  },
};

const CircleHeader = () => {
  return (
    <View>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
        <TopStep size={53} step={2}/>
        <LineBetweenSteps/>
        <TopStepCurrent size={53} step={3}/>
        <LineBetweenSteps/>
        <TopStep size={53} step={4}/>
      </View>
      <Text style={styles.buttonText}>
        Focus rating
      </Text>
    </View>


  );
};

export default CircleHeader;
