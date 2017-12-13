import React, { Component } from 'react';
import { View, Switch, Text } from 'react-native';

const styles = {
  font: {
    color: '#4a4a4a',
    fontSize: 16
  },
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
  },
  border: {
    color: '#8c8c8c',
    width: 300,
    borderWidth: 0.3,
  },
  switchStyle: {
    alignSelf: 'flex-end',
  }
};

export default class FocusRatingListItem extends Component {

  render() {
    const { item } = this.props;
    const { font, border, itemStyle, switchStyle } = styles;

    return (
      <View>
        <View style={itemStyle}>
          <View style={{ flex: 1 }}>
            <Text style={font}>
              {item.text}
            </Text>
          </View>
          <View style={{ width: 60 }}>
            <Switch style={switchStyle} onValueChange={item.onValueChange} />
          </View>
        </View>
        <View style={border}/>
      </View>
    );
  }
}
