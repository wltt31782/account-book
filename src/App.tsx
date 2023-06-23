import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TempPage from '@/pages/_TempPage';

function App() {
  return (
    <Provider store={store}>
      <TempPage />
    </Provider>
  );
}

export default App;
