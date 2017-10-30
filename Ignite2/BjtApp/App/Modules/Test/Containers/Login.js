import React, {Component} from 'react'
import {Text, View, TextInput, Button, ListView, RefreshControl, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './Styles/TestStyle';
import BookAction from '../Redux/BookRedux'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Billboard extends Component {

  constructor(props) {
    super(props);
    this._refreshList();
    this.state = {
      placeholder: '请输入书名',
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      value: ''
    }
  }

  _getList(varu) {
    if (typeof(this.state.value) !== "undefined"&&this.state.value !== "") {
      this.props.getBookList(this.state.value,0);
    }
    else {
      this.props.getBookList("undefined",this.props.pageNum);
    }
  }

  _refreshList() {
    this.props.bookResetPage();//初始化pageNum
    this.props.getBookList("",0);
  }

  _renderRow(data){
    let im_ui=data.src;
    let name=data.name;
    return(
      <View style={styles.bookView}>
        <Text>{name}</Text>
        <Image style={styles.imageStyle} source={{uri:im_ui}}/>
      </View>
    );
  }

  componentWillUnmount() {
  }


  componentWillMount() {
    //console.warn(this.props.bbb);//aaa
  }

  componentDidMount() {
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>登录</Text>
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
          onEndReachedThreshold={100}
          onEndReached={() => this._getList()}
          renderRow={(data) =>this._renderRow(data)}
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
    getBookList: (value,pageNum) => dispatch(BookAction.getBookList(value,pageNum)),
    bookResetPage: () => dispatch(BookAction.bookResetPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Billboard)
