import apisauce from 'apisauce'
import api from '../../../Services/Api'
import { call, put } from 'redux-saga/effects'

const PAGE_SIZE=10;
async function getBookList(value,pageNum) {
  const objApi=await api.create("http://172.31.141.208:8888");
  const list=await objApi.getData("/Book",{name:value,page:pageNum,size:PAGE_SIZE});
  return list;
}

export default {
  getBookList
}
