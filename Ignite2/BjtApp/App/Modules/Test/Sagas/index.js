import {call, put, select, takeLatest} from 'redux-saga/effects';
import BookAction, {BookTypes} from '../Redux/BookRedux';
import UserAction, {UserTypes} from '../Redux/UserRedux';
import RoutineApi from '../Services/UserApi';

const api = RoutineApi

// 获取当前的分页数 state 全局的
function getPage(state) {
  return state.routine.page;
}


export function* getBookList({value,pageNum}) {
  let list_n= yield call(api.getBookList,value,pageNum);
  yield put(BookAction.bookGetListSuccess(list_n));
}

export function* login({username,password}) {
  let result= yield call(api.Login,username,password);
  yield put(UserAction.LoginResult(result.msg));
}



export default [
  takeLatest(BookTypes.GET_BOOK_LIST, getBookList),
  takeLatest(UserTypes.LOGIN, login)
]
