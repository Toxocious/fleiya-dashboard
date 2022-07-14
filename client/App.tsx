import { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Loader } from '@mantine/core';

import { Sidebar } from 'client/components/sidebar';
import { PokedexEntry } from 'client/components/pokedex_entry';

import { HomePage } from 'client/routes/home';
import { NewsPage } from 'client/routes/news';
import { PokedexPage } from 'client/routes/pokedex';
import { ItemdexPage } from 'client/routes/itemdex';
import { GuidesPage } from 'client/routes/guides';
import { ExplorerPage } from 'client/routes/explorer';
import { ChangelogPage } from 'client/routes/changelog';

import './App.css';

function App() {
  return (
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
  );
}

export default App;
