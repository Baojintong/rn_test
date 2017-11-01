import React, {Component} from 'react'
import {Text, View, TextInput, Button, ListView, RefreshControl, Image, Alert,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './Styles/TestStyle';
import UserAction from '../Redux/UserRedux'
import {navigate} from 'react-navigation'
import HelloScreen from './HELLO'

class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: <Text style={styles.headerText}>登录</Text>,
      headerLeft: (
        <TouchableOpacity onPress={()=>alert("关闭")}>
          <Image source={require('../../../Images/Icons/close-button2x.png')} style={{width: 50,height: 50}}/>
        </TouchableOpacity>
      ),
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      placeholder_username: "用户名",
      placeholder_password: "密码",
      username: '',
      password: ''
    }
  }

  _login() {
    this.props.login(this.state.username, this.state.password);
  }

  _register() {
    const {navigate} = this.props.navigation;
    navigate("RegisterScreen");
  }

  componentWillUnmount() {
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    const {navigate} = this.props.navigation;
    if (nextProps.result === "true") {
      navigate("HelloScreen")
    }else if(nextProps.result === "false"){
      alert("账号密码错误","账号密码错误");
      this.props.cleanResult();
    }

  }


  render() {
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.inputText}
            placeholder={this.state.placeholder_username}
            value={this.state.value}
            onChangeText={(username) => this.setState({username})}
          />
          <TextInput
            style={styles.inputText}
            placeholder={this.state.placeholder_password}
            value={this.state.value}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
          />
          <View style={styles.buttonView}>
            <Button title="登录" onPress={() => this._login()} color="#841584"/>
            <Button title="注册" onPress={() => this._register()} color="#841584"/>
          </View>
        </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    result: state.userRedux.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(UserAction.login(username, password)),
    cleanResult:()=>dispatch(UserAction.cleanResult())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
