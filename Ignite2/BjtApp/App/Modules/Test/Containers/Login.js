import React, {Component} from 'react'
import {Text, View, TextInput, Button, ListView, RefreshControl, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './Styles/TestStyle';
import UserAction from '../Redux/UserRedux'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      placeholder_username: '用户名',
      placeholder_password: '密码',
      username: '',
      password: ''
    }
  }

  _login(){
    this.props.login(this.state.username,this.state.password);
  }
  _register(){
    console.warn("_register")
  }


  componentWillUnmount() {
  }


  componentWillMount() {
  }

  componentDidMount() {
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>登录</Text>
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
        <Button title="登录" onPress={()=>this._login()}/><Button title="注册" onPress={()=>this._register()}/>
  </View>
  )
  }

}
const mapStateToProps = (state) => {
  return {
    bookList: state.bookList.bookList,
    fetching: state.bookList.fetching,
    bbb: state.bookList.aaa,
    pageNum: state.bookList.pageNum
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(UserAction.login(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
