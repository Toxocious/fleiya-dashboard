import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { MantineProvider, Loader } from '@mantine/core';

import { Sidebar } from '@components/sidebar';
import { PokedexEntry } from '@components/pokedex_entry';

import { HomePage } from '@routes/home';
import { NewsPage } from '@routes/news';
import { PokedexPage } from '@routes/pokedex';
import { ItemdexPage } from '@routes/itemdex';
import { GuidesPage } from '@routes/guides';
import { ExplorerPage } from '@routes/explorer';
import { ChangelogPage } from '@routes/changelog';

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
    <div className='App'>
      <BrowserRouter>
        <Sidebar />

        <Suspense fallback={<Loader color='teal' />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/pokedex' element={<PokedexPage />} />
            <Route path='/pokedex/:id' element={<PokedexEntry />} />
            <Route path='/itemdex' element={<ItemdexPage />} />
            <Route path='/guides' element={<GuidesPage />} />
            <Route path='/explorer' element={<ExplorerPage />} />
            <Route path='/changelog' element={<ChangelogPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  </MantineProvider>
);
