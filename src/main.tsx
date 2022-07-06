import ReactDOM from 'react-dom/client';

import { MantineProvider } from '@mantine/core';

import App from './App';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider
    theme={{
      colorScheme: 'dark',
      defaultRadius: 6,
      loader: 'oval',
      colors: {
        dark: [
          '#20c997',
          '#36cea1',
          '#4cd3ab',
          '#62d9b6',
          '#79dec0',
          '#2C2E33',
          '#25262B',
          '#1A1B1E',
          '#141517',
          '#101113',
        ],
      },
    }}
  >
    <App />
  </MantineProvider>
);
