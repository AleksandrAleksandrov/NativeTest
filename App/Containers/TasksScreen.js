import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Images } from '../Themes'
import Header from '../Views/Header/Header';
import Register from '../Views/Register/Register';
import Svg,{ Rect } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import navigationStyles from '../Navigation/Styles/NavigationStyles'

const { width, height } = Dimensions.get('window');
// Styles
import styles from './Styles/LaunchScreenStyles'

export default class TasksScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'check-square'} style={navigationStyles.navigationTabIcon} color={ tintColor }/>
    ),
  };

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
          <Register/>
        </View>
      </LinearGradient>
    )
  }
}
