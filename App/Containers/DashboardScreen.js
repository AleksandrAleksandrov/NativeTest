import React, { Component } from 'react'
import { View, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import FocusRating from '../Views/FocusRating/FocusRating';
import Svg,{ Rect } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import navigationStyles from '../Navigation/Styles/NavigationStyles'

const { width, height } = Dimensions.get('window');

const styles = {
  svgStyle: {
    position: 'absolute',
    left: -100,
    top: -20,
  },
  mainStyle: {
    width: width,
    height: height,
  },
};

export default class DashboardScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'dashboard'} style={navigationStyles.navigationTabIcon} color={ tintColor }/>
    ),
  };

  render () {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.9}}
        colors={['#FF577B', '#FE9B8C']}
      >
        <Svg
          style={styles.svgStyle}
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
        <View style={styles.mainStyle}>
          <FocusRating />
        </View>
      </LinearGradient>
    )
  }
}
