import apisauce from 'apisauce'
import api from '../../../Services/Api'
import { call, put } from 'redux-saga/effects'

async function Login(username,password) {
  const objApi=await api.create("http://192.168.31.79:8888");
  const result= await objApi.getData("/User/Login",{username:username,password:password});
  return result;
}

export default {
  Login
}
