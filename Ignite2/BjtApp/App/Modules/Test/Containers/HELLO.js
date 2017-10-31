import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class MyCompent extends Component {

  static navigationOptions = {
    header:{//标题
      visible:false
    }
  };
  render() {
    return (
      <View>
        <Text>HELLO</Text>
      </View>
    );
  }
}
