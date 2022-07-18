import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { MantineProvider } from '@mantine/core';

import { MAIN_REDUCER } from './reducers';

import { App } from './app';

import './main.css';

const STORE = configureStore({ reducer: MAIN_REDUCER });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={STORE}>
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        defaultRadius: 6,
        loader: 'oval',
        colors: {
          dark: [
            '#804cd3',
            '#7036ce',
            '#6120c9',
            '#571cb4',
            '#4d19a0',
            '#2c2e33',
            '#25262b',
            '#1a1b1e',
            '#141517',
            '#101113',
          ],
        },
      }}
    >
      <App />
    </MantineProvider>
  </Provider>
);
