import { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { UserBar } from '@components/user_bar';
import { LoadingSvg } from '@components/loading_svg';

import { PokedexEntry } from '@features/pokedex_entry';

import { HomePage } from '@routes/home';
import { PokedexPage } from '@routes/pokedex';
import { ItemdexPage } from '@routes/itemdex';
import { GuidesPage } from '@routes/guides';
import { ExplorerPage } from '@routes/explorer';
import { ChangelogPage } from '@routes/changelog';

import './app.scss';

export const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <UserBar />

        <Suspense fallback={<LoadingSvg />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/pokedex' element={<PokedexPage />} />
            <Route path='/pokedex/:id' element={<PokedexEntry />} />
            <Route path='/itemdex' element={<ItemdexPage />} />
            <Route path='/guides' element={<GuidesPage />} />
            <Route path='/explorer' element={<ExplorerPage />} />
            <Route path='/changelog' element={<ChangelogPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Footer />
    </div>
  );
};
