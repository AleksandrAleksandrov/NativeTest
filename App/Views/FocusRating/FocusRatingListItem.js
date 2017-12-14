import React, { Component } from 'react';
import { View, Switch, Text } from 'react-native';
import { BodyText, ItemStyle, Border, SwitchStyle } from './Styles/FocusRatingStyle';

export default class FocusRatingListItem extends Component {

  render() {
    const { item } = this.props;

    return (
      <View>
        <View style={ItemStyle}>
          <View style={{ flex: 1 }}>
            <Text style={BodyText}>
              {item.text}
            </Text>
          </View>
          <View style={{ width: 60 }}>
            <Switch style={SwitchStyle} onValueChange={item.onValueChange} />
          </View>
        </View>
        <View style={Border}/>
      </View>
    );
  }
}
