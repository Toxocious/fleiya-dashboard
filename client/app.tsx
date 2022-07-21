import { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Loader } from '@mantine/core';

import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { UserBar } from '@components/user_bar';

import { PokedexEntry } from '@components/pokedex_entry';

import { HomePage } from '@routes/home';
import { FeaturesPage } from '@routes/features';
import { PokedexPage } from '@routes/pokedex';
import { ItemdexPage } from '@routes/itemdex';
import { GuidesPage } from '@routes/guides';
import { ExplorerPage } from '@routes/explorer';
import { ChangelogPage } from '@routes/changelog';

import './main.css';

export const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <UserBar />

        <Suspense fallback={<Loader color='teal' />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
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

      <Footer />
    </div>
  );
};
