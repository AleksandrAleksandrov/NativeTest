import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import Header from '../Views/Header/Header';
import FocusRating from '../Views/FocusRating/FocusRating';
import Svg,{ Rect } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

export default class DashboardScreen extends Component {
  render () {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 0.9}} colors={['#FF577B', '#FE9B8C']}>
        <Svg
          style={{
            position: 'absolute',
            left: -100,
            top: -20
          }}
          height="500"
          width="500"
        >
          <Rect
            x="1"
            y="1"
            width="500"
            height="500"
            fill="#FF576C"
            rotate="-25"
          />
        </Svg>
        <View style={{ width: width, height: height}}>
          <Header/>
          <FocusRating />
        </View>
      </LinearGradient>
    )
  }
}
