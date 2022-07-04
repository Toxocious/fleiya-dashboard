import ReactDOM from 'react-dom/client';

import { MantineProvider } from '@mantine/core';

import App from './App';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={{ colorScheme: 'dark' }}>
    <App />
  </MantineProvider>
);
