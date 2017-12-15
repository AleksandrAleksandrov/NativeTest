import React, { Component } from 'react';
import { View, Switch, Text } from 'react-native';
import { BodyText, ItemStyle, Border, SwitchStyle } from './Styles/FocusRatingStyle';

export default class FocusRatingListItem extends Component {

  render() {
    const { value, text, onValueChange } = this.props.item;

    return (
      <View>
        <View style={ItemStyle}>
          <View style={{ flex: 1 }}>
            <Text style={BodyText}>
              {text}
            </Text>
          </View>
          <View style={{ width: 60, alignSelf: 'center' }}>
            <Switch style={SwitchStyle} onValueChange={onValueChange} value={value}/>
          </View>
        </View>
        <View style={Border}/>
      </View>
    );
  }
}
