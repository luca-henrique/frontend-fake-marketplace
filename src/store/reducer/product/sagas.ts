import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '@/service';
import {
 readCategoriesSuccess,readProductsSuccess
} from './actions';


function* readProduct(): unknown  {
  try {
    const {data} = yield call(api.get, 'products');
    yield put(readProductsSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readCategories():unknown {
  try {
    const {data} = yield call(api.get, `/`);
    yield put(readCategoriesSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* postsSaga() {
  yield all([
    takeLatest('product/read-products-request', readProduct),
    takeLatest('product/read-products-request', readCategories),
  ]);
}

export default postsSaga;
