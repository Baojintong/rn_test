import React, {Component} from 'react';
import {Text,View,Button} from 'react-native';
import {navigate} from 'react-navigation'
import page2 from '../../Module2/Containers/Home'
import page3 from '../../Module3/Containers/Home'
export default class MyCompent extends Component<{}> {
  static navigationOptions = {
    title: 'PageMain',//标题
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>PageMain</Text>
        <Button onPress={() => navigate('page2')} title="go to page2"/>
        <Button onPress={() => navigate('page3')} title="go to page3"/>
      </View>
    );
  }
}
