import {call, put, select, takeLatest} from 'redux-saga/effects';
import BookAction, {BookTypes} from '../Redux/BookRedux';
import RoutineApi from '../Services/BookApi';

const api = RoutineApi

// 获取当前的分页数 state 全局的
function getPage(state) {
  return state.routine.page;
}


export function* getBookList({value,pageNum}) {
  let list_n= yield call(api.getBookList,value,pageNum);
  yield put(BookAction.bookGetListSuccess(list_n));
}

export default [
  takeLatest(BookTypes.GET_BOOK_LIST, getBookList)
]
