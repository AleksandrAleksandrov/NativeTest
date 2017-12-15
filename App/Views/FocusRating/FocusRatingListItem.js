import React, { Component } from 'react';
import { View, Switch, Text } from 'react-native';
import { BodyText, ItemStyle, Border, SwitchStyle } from './Styles/FocusRatingStyle';

const styles = {
  switchWrapper: {
    width: 60,
    alignSelf: 'center',
  },
  textWrapper: {
    flex: 1,
  },
};

export default class FocusRatingListItem extends Component {

  render() {
    const { value, text, onValueChange } = this.props.item;

    return (
      <View>
        <View style={ItemStyle}>
          <View style={styles.textWrapper}>
            <Text style={BodyText}>
              {text}
            </Text>
          </View>
          <View style={styles.switchWrapper}>
            <Switch
              style={SwitchStyle}
              onValueChange={onValueChange}
              value={value}/>
          </View>
        </View>
        <View style={Border}/>
      </View>
    );
  }
}
