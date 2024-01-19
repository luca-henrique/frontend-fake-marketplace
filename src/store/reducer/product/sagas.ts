import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '@/service';
import {
 readCategoriesSuccess,readProductsSuccess, searchProductSuccess
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
    const {data} = yield call(api.get, `/categories`);
    yield put(readCategoriesSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

//@ts-expect-error: Type 
function* searchProduct({ payload }: unknown): unknown {
  try {
    const { data } = yield call(api.get, `products/?title=${payload}`);
    yield put(searchProductSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* postsSaga() {
  yield all([
    takeLatest('product/read-products-request', readProduct),
    takeLatest('product/read-products-request', readCategories),
    takeLatest('product/search-product-request', searchProduct),
  ]);
}

export default postsSaga;