import React, { Component } from 'react';
import { TextInput, Text, Picker, View, TouchableOpacity } from 'react-native';
import Card from '../../Components/Card';
import {RegisterHeaderStyles, RegisterInputStyles, RegisterLabelStyles} from './Styles/RegisterStyles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';


const countries = [
  {
    code: '+46',
    name: 'Sweden'
  }, {
    code: '+43',
    name: 'Austria'
  }
];


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          phone: '',
          code: '+43',
          error: '',
          countries
        };
    };

    submit() {
      alert('Nice!');
      alert(this.state.code + this.state.phone);
    }

    validate() {
        const { phone } = this.state;
        const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

        if(!phone || phone.length < 6 || !isNumber(phone)) {
            this.setState({error: 'You entered an incorrect phone number'})

        } else {
          this.submit.call(this);
        }
    }

    render() {
        return (
            <View>
            <Card>
                <Text style={RegisterHeaderStyles}>
                    Signup
                </Text>
                <Text style={RegisterLabelStyles}>
                    Choose Country
                </Text>
                <View style={{position: 'relative', marginTop: 15}}>
                    <Icon style={{position: 'absolute', left: 12, top: 2}} size={16} color='#8895A9' name='flag'/>
                    <Picker
                        style={{
                            marginTop: -15,
                            paddingBottom: 15,
                            paddingLeft: 30,
                            marginLeft: 25,
                            color: '#354052',
                        }}
                        itemStyle={{fontSize: 13, color: '#354052'}}
                        selectedValue={this.state.code}
                        onValueChange={(itemValue, itemIndex) => this.setState({code: itemValue})}
                    >
                      {countries.map(country => {
                        return (
                          <Picker.Item key={country.code} label={country.name + ' (' + country.code + ')'} value={country.code} />
                        )
                      })}
                    </Picker>
                </View>
                <Text style={RegisterLabelStyles}>
                    Your phone number
                </Text>
                <View style={{position: 'relative', marginTop: 15}}>
                    <Icon style={{position: 'absolute', left: 12, top: 15}} size={16} color='#8895A9' name='phone'/>
                    <TextInput
                        style={{
                            paddingBottom: 15,
                            paddingLeft: 25,
                            marginLeft: 10,
                            color: '#354052',
                            fontSize: 13,
                        }}
                        onChangeText={(phone) => this.setState({phone, error: ''})}
                        value={this.state.text}
                        placeholder="Your phone number"
                    />
                </View>
                <Text style={{marginTop: 10, marginBottom: 15, textAlign: 'center', color: 'red'}}>{this.state.error}</Text>
                <LinearGradient style={{borderRadius: 6, height: 45, marginLeft: 20, marginRight: 20}} start={{x:0.1, y:0}} end={{x: 0.9,y: 0}} colors={['#FF577B', '#FD5E2C']}>
                  <TouchableOpacity onPress={()=> {this.validate()}}>
                    <Text style={buttonText}>
                      CONTINUE
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
            </Card>
                <View style={shadowStyle} />
            </View>
        )
    }
};

const buttonText = {
    textAlign: 'center',
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10
};

const shadowStyle = {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    opacity: 0.3,
    width: 300,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#fff',
};
