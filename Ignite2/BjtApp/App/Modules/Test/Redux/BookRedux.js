import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  getBookList: ["value","pageNum"],
  bookGetListSuccess: ["bookList"],
  bookResetPage:[]
})

export const BookTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  bookList: [],
  fetching: false,
  aaa:'aaa'
})

export const getBookList = (state) => {

  //console.warn(Creators.getBookList('java').type)//GET_BOOK_LIST
  //console.warn(Creators.getBookList('java').value)//java
  //所以Creators.getBookList('java')  相当于action   {type:GET_BOOK_LIST,value:java}

  // const i = 5
  // const a = (state, action) => state + 1
  // const b = (state, action) => state + 2
  // const r = createReducer(i,
  //   {
  //     [Types.GET_BOOK_LIST]: a,
  //     [Types.BOOK_GET_LIST_SUCCESS]: b
  //   }
  // )
  // const v1 = r(i, {type: Types.GET_BOOK_LIST})//创建了一个reduce ，对 state i进行了修改
  // //console.warn(v1)//6
  // const v2 = r(i, {type: Types.BOOK_GET_LIST_SUCCESS})
  // //console.warn(v2)//7
  //
  // //load 读取
  // storage.load({
  //   key: 'user',
  //   id: '1001'
  // }).then(ret => {
  //   // 如果找到数据，则在then方法中返回
  //   console.warn(ret.name);//A
  // }).catch(err => {
  //   // 如果没有找到数据且没有sync方法，
  //   // 或者有其他异常，则在catch中返回
  //   console.warn(err.message);
  //   switch (err.name) {
  //     case 'NotFoundError':
  //       // TODO;
  //       break;
  //     case 'ExpiredError':
  //       // TODO
  //       break;
  //   }
  // })
  return state.merge({fetching: true,aaa:'aaa'})
}
export const bookResetPage = (state) => state.merge({ bookList: [], pageNum: 0 })

export const bookGetListSuccess = (state, {bookList}) => {
  let list=state.bookList.concat(bookList);
  let pageNum = state.pageNum + 1;
  state = state.merge({fetching: false, bookList: list,pageNum:pageNum});
  return state;
};


export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_BOOK_LIST]: getBookList,
  [Types.BOOK_GET_LIST_SUCCESS]: bookGetListSuccess,
  [Types.BOOK_RESET_PAGE]:bookResetPage
})
