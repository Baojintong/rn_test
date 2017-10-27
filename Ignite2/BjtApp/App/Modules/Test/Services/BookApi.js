import apisauce from 'apisauce'
import api from '../../../Services/Api'
import { call, put } from 'redux-saga/effects'

async function getBookList(value) {
  const objApi=await api.create("http://172.31.141.208:8888");
  const list=await objApi.getData("/Book/"+value);
  return list
}

export default {
  getBookList
}
