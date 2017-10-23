import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';
import Module3Action from '../Redux/Module3Redux'
import {connect} from 'react-redux'

class MyCompent extends Component<{}> {
  static navigationOptions = {
    title: 'Page3',//标题
  };

  constructor(props) {
    super(props);
    this.state = {
      name: 'jt',
      age: '22'
    };
  }

  _test() {
    console.warn(this.props.name + "----" + this.props.age);
  }

  render() {
    return (
      <View>
        <Button onPress={() => {
          this._test()
        }} title='打印一下'></Button>
        <Button onPress={() => {
          this.props.testAction(this.state.name,this.state.age)
        }} title='绑定数据'></Button>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  testAction: (name, age) => {
    console.warn('页面'+name+'----'+age);
    return dispatch(Module3Action.testAction(name, age))
  }
})
const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCompent)
