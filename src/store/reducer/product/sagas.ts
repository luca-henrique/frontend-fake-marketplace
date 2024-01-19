import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '@/service';
import {
  readProductsSuccess, searchProductByCategorySuccess, searchProductSuccess
} from './actions';


function* readProduct(): unknown {
  try {
    const { data } = yield call(api.get, 'products');
    yield put(readProductsSuccess(data));
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

//@ts-expect-error: Type 
function* searchProductByCategory({ payload }: unknown): unknown {
  try {
    const { data } = yield call(api.get, `products/?categoryId=${payload}`);
    yield put(searchProductByCategorySuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* postsSaga() {
  yield all([
    takeLatest('product/read-products-request', readProduct),
    takeLatest('product/search-product-request', searchProduct),
    takeLatest('product/search-product-by-category-request', searchProductByCategory),
  ]);
}

export default postsSaga;
