import { Action, configureStore, ThunkAction, Tuple} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from './reducer/rootSagas';
import { rootReducer } from './reducer/rootReducer';

import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  //@ts-expect-error: Erro type tuple
  middleware: () => new Tuple(sagaMiddleware, logger),
});


export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;