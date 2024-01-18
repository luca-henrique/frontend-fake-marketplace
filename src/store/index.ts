import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import logger from 'redux-logger';

import { rootSaga } from './reducer/rootSagas';
import { rootReducer } from './reducer/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;