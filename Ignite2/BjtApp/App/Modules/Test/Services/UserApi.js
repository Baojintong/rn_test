import apisauce from 'apisauce'
import api from '../../../Services/Api'
import { call, put } from 'redux-saga/effects'

async function Login(username,password) {
  const objApi=await api.create("http://172.31.141.208:8888");
  const result= await objApi.getData("/User/Login",{username:username,password:password});
  return result;
}

export default {
  Login
}
