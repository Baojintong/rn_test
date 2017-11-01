import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  login: ["username","password"],
  LoginResult: ["result"],
  cleanResult:[""]
})

export const UserTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  username: '111',
  password: ''
})

export const login = (state) =>{return state}

export const LoginResult = (state,{result}) =>{
  return state.merge({result})
}

export const cleanResult = (state) =>{
  let result="";
  return state.merge({result});
}


export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGIN_RESULT]: LoginResult,
  [Types.CLEAN_RESULT]: cleanResult
})
