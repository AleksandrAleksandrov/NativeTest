import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { HeaderStyles, MainWordStyles, CreatedBy } from './Styles/HeaderStyles'


const Header = () => {
    return (
        <View style={HeaderStyles}>
            <Text style={CreatedBy}><Text style={MainWordStyles}>Change</Text>{"\n"}by Anna Jelen</Text>
        </View>
        );
};

export default Header;