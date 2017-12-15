import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, TouchableOpacity, Text, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { focusRatingSwitch } from '../../Actions'
import CircleHeader from '../CircleHeader/CircleHeader'
import FocusRatingListItem from './FocusRatingListItem'
import { CardCustom } from '../../Components/CardCustom'

const { width } = Dimensions.get('window');

const styles = {
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: width - 100,
    backgroundColor: '#6c7582',
  },
  buttonWrapper: {
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
  }
};

class FocusRating extends Component {

  render() {
    const { ratingList, focusRatingSwitch } = this.props;
    const { shadowStyle, buttonText, button, buttonWrapper } = styles;

    const list = [
      {
        text: 'Has this project anything to do with my ongoing project',
        onValueChange: (value) => {focusRatingSwitch(0, value)},
        value: ratingList[0],
      }, {
        text: 'Does this project belong to my core items of my work / company',
        onValueChange: (value) => {focusRatingSwitch(1, value)},
        value: ratingList[1],
      }, {
        text: 'Is this project prt of my longterm vision?',
        onValueChange: (value) => {focusRatingSwitch(2, value)},
        value: ratingList[2],
      }, {
        text: 'Does this project contribute to my life in general',
        onValueChange: (value) => {focusRatingSwitch(3, value)},
        value: ratingList[3],
      },
    ];

    return (
      <View style={{ marginTop: 28, flex: 1, marginBottom: 55,}} >
        <CircleHeader />
        <View style={{ flex: 1}}>
          <CardCustom style={{ flex: 1, marginTop: 26, justifyContent: 'space-between' }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              <View style={{ flex: 1, justifyContent: 'flex-end', }} >
                <FlatList
                  scrollEnabled={false}
                  data={list}
                  renderItem={({ item }) => <FocusRatingListItem item={item} />}
                />
              </View>
            </ScrollView>
            <View style={buttonWrapper}>
              <TouchableOpacity
                style={button}
                onPress={()=> {}}
              >
                <Text style={buttonText}>
                  CONTINUE
                </Text>
              </TouchableOpacity>
            </View>
          </CardCustom>
        </View>
      </View>
    )
  }
};

const mapStateToProps = state => ({
  ratingList: state.focusRating.ratingList,
});

const mapDispatchToProps = dispatch => ({
  focusRatingSwitch: (id, isSwitched) => { dispatch(focusRatingSwitch(id, isSwitched)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(FocusRating);
