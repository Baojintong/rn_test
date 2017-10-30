import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  login: ["username","password"],
  bookGetListSuccess: ["bookList"]
})

export const UserTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  username: '',
  password: '',
  islogin:false
})

export const login = () =>{}



export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login
})
