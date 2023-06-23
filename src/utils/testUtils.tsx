import '@testing-library/jest-dom';
import { render as _render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@/store/rootReducer';
import rootSaga from '@/store/rootSaga';
import { RootState } from '@/store';
import { initRootState as _initRootState } from '@/store';

//todo : testUtils 보완 필요함.
const mockDispatch = jest.fn();

const render = (ui: React.ReactElement, initRootState: RootState = _initRootState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    preloadedState: initRootState,
  });

  sagaMiddleware.run(rootSaga);

  store.dispatch = mockDispatch;

  return _render(<Provider store={store}>{ui}</Provider>);
};

export * from '@testing-library/react';
export { render, mockDispatch };
