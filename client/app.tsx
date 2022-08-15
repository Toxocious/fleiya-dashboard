import { useState, Suspense } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { trpc } from '@hooks/trpc';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { UserBar } from '@components/user_bar';
import { LoadingSvg } from '@components/loading_svg';

import { HomePage } from '@routes/home';
import { PokedexPage } from '@routes/pokedex';
import { PokedexEntry } from '@routes/pokedex_entry';
import { ItemdexPage } from '@routes/itemdex';
import { GuidesPage } from '@routes/guides';
import { GuideEntry } from '@routes/guide_entry';
import { ExplorerPage } from '@routes/explorer';
import { ChangelogPage } from '@routes/changelog';
import { TLevelCalcPage } from '@routes/tl_calc';
import { HPCalcPage } from '@routes/hp_calc';
import { MovedexPage } from '@routes/movedex';
import { NpcsPage } from '@routes/npcs';
import { Http404Page } from '@routes/404';

import './app.scss';

export const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: 'http://localhost:5000/trpc',
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
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
                <Route path='/movedex' element={<MovedexPage />} />
                <Route path='/npcs' element={<NpcsPage />} />

                <Route path='/guides' element={<GuidesPage />} />
                <Route path='/guides/:id' element={<GuideEntry />} />

                <Route path='/tl_calc' element={<TLevelCalcPage />} />
                <Route path='/hp_calc' element={<HPCalcPage />} />

                <Route path='/changelog' element={<ChangelogPage />} />
                <Route path='/explorer' element={<ExplorerPage />} />

                <Route path='*' element={<Http404Page />} />
              </Routes>
            </Suspense>
          </BrowserRouter>

          <Footer />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
};
