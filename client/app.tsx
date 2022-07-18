import { useEffect, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Loader } from '@mantine/core';

import { Sidebar } from '@components/sidebar';
import { PokedexEntry } from '@components/pokedex_entry';

import { HomePage } from '@routes/home';
import { NewsPage } from '@routes/news';
import { FeaturesPage } from '@routes/features';
import { PokedexPage } from '@routes/pokedex';
import { ItemdexPage } from '@routes/itemdex';
import { GuidesPage } from '@routes/guides';
import { ExplorerPage } from '@routes/explorer';
import { ChangelogPage } from '@routes/changelog';

import { GET_POKEDEX_ENTRIES } from '@actions/pokedex_entry';

import './main.css';

export const App = () => {
  const dispatch = useDispatch();

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
            <Route path='/features' element={<FeaturesPage />} />
            <Route path='/changelog' element={<ChangelogPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
