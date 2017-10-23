import { call, put, select, takeLatest,takeEvery } from 'redux-saga/effects';
import Module3Action,{Module3Types} from '../Redux/Module3Redux';

export function* testAction(aa,{name,age}) {
  console.warn('监听了TEST_ACTION'+name+'------'+age+'-----'+aa);
  yield put(Module3Action.log());
}

export default [
  takeEvery(Module3Types.TEST_ACTION, testAction,'2222')
]
