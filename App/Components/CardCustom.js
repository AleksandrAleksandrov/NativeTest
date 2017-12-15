import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 6,
    shadowColor: "rgba(61, 82, 190, 0.17)",
    shadowOffset: {
      width: 0,
      height: 15
    },
    shadowRadius: 28,
    shadowOpacity: 1
  },
};

const CardCustom = (props) => {
  return (
    <View
      {...props}
      style={[styles.containerStyle, props.style]}
    >
      {props.children}
    </View>
  );
};

export { CardCustom };
