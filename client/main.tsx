import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { MAIN_REDUCER } from './reducers';

import { App } from './app';

import './main.scss';

const STORE = configureStore({ reducer: MAIN_REDUCER });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={STORE}>
    <App />
  </Provider>
);
