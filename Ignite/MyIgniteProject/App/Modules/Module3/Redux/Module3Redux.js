import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  testAction: ['name', 'age'],
  log:[]
})

export const Module3Types = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  name: '111',
  age: '222'
})

/* ------------- Reducers ------------- */

// request the avatar for a user
export const testAction = (state, {name, age}) => {
  console.warn('redux'+'---'+name+'----'+age);
  state.merge({name, age})
}

export const log = function(){
  console.warn('redux');
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TEST_ACTION]: testAction,
  [Types.LOG]: log
})
