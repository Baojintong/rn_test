import React, {Component} from 'react';
import {Text,TouchableOpacity,View} from 'react-native';
import styles from './Styles';

export default class reset extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props._onPress}>
          <Text style={styles.reset_text}>{this.props._title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
