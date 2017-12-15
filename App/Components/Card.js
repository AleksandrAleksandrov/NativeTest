import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './Styles/CardStyles'

const Card = (props) => {
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    )
};
export default Card;
