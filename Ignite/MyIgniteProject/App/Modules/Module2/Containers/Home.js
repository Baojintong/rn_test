import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class MyCompent extends Component<{}> {
  static navigationOptions = {
    title: 'page2',
  };

  render() {
    const {goBack} = this.props.navigation;
    return (
      <View>
        <Text>page2</Text>
        <Button onPress={() => {
          goBack()
        }} title="back"/>
      </View>
    );
  }
}
