import { all, fork } from 'redux-saga/effects';
import product from './product/sagas';

export function* rootSaga() {
  yield all([fork(product)]);
}
