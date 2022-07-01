import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';

import App from './App';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={{ colorScheme: 'dark' }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>
);
