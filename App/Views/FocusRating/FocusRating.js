import React, { Component } from 'react';
import { TextInput, Text, Picker, View, TouchableOpacity, Switch, FlatList } from 'react-native';
import Card from '../Components/Card';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import FocusRatingListItem from './FocusRatingListItem'

const styles = {
  shadowStyle: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    opacity: 0.3,
    width: 300,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
};

const list = [
  {
    text: 'Has this project anything to do with my ongoing project',
    onValueChange: () => {},
  }, {
    text: 'Does this project belong to my core items of my work / company',
    onValueChange: () => {},
  }, {
    text: 'Is this project prt of my longterm vision?',
    onValueChange: () => {},
  }, {
    text: 'Does this project contribute to my life in general',
    onValueChange: () => {},
  },
];

export default class FocusRating extends Component {

  render() {

    const { shadowStyle } = styles;

    return (
      <View>
        <Card>
          <FlatList
            data={list}
            renderItem={({ item }) => <FocusRatingListItem item={item} />}
          />
        </Card>
        <View style={shadowStyle} />
      </View>
    )
  }
};


