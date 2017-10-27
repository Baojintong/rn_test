import React, { Component } from 'react'
import {Text, View, TextInput, Button, ListView, RefreshControl,Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './Styles/TestStyle';
import BookAction from '../Redux/BookRedux'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Billboard extends Component {

  constructor(props) {
    var userA = {
      name: 'A',
      age: 20,
      tags: [
        'geek',
        'nerd',
        'otaku'
      ]
    };
    storage.save({
      key: 'user',  // 注意:请不要在key中使用_下划线符号!
      id: '1001',   // 注意:请不要在id中使用_下划线符号!
      data: userA,
      expires: 1000 * 60
    });
    super(props);
    this._refreshList();
    this.state = {
      placeholder: '请输入书名',
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      value: ''
    }
  }

  _getList() {
    if (typeof(this.state.value) !== "undefined"&&this.state.value !== "") {
      this.props.getBookList(this.state.value);
    }
    else {
      this.props.getBookList();
    }
  }

  _refreshList() {
    this.props.getBookList();
    //console.warn(this.props.bbb);
  }

  componentWillUnmount() {
  }


  componentWillMount() {
    console.warn(this.props.bbb);
  }

  componentDidMount(){
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          placeholder={this.state.placeholder}
          value={this.state.value}
          onChangeText={(value) => this.setState({value})}
          onSubmitEditing={() => this._getList()}
          keyboardType='web-search'
        />
        <ListView
          style={styles.ListView}
          dataSource={ds.cloneWithRows(this.props.bookList)}
          enableEmptySections={true}
          renderRow={(data) => <Text>{data.num}  {data.name}  {data.money}</Text>}
          refreshControl={
            <RefreshControl
              refreshing={this.props.fetching}
              onRefresh={() => this._refreshList()}
              title="加载中……"
              progressBackgroundColor="#ffffff"
            />}
        />
      </View>
    )
  }

}

//这个地方 state 后面. 出的是reducers(redux层注册的所有reducer的集合),
// 原因在于在redux里面组件不直接更改state，全部依靠action，通过action确定到reducer，所以，新的state全部都是在redux层进行生成的，所以需要先确定
// 在我们开发项目的时候；必定有多个reducer文件;使用combineEeducers方法将多个reducer合并成一个；

// 下面这个state的来源
// 我们知道一个reducer就会返回一个新的state;现在多个reducer合并成了一个reducer;下面又将这个总的reducer
// 合并成了一个store;
// const store = createStore(reducers);
// store这个对象管理着多个reducer对应的state；形象点说；一个reducer对应一个state;然后通过combineReducers将多个state合并成了一个大的state对象; React-Redux 提供Provider组件;并设置参数store，可以让容器组件的connect方法拿到store。
// <Provider store={store}>
//   <App />
// </Provider>,
// 上面代码中，Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了。
// 这个大的state那就是mapStateToProps方法的参数state的来源了；
const mapStateToProps = (state) => {
  console.warn('state'+state.value)
  return {
    bookList: state.bookList.bookList,
    fetching: state.bookList.fetching,
    bbb:state.bookList.aaa
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookList: (value) => dispatch(BookAction.getBookList(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Billboard)
