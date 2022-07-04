import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Sidebar from './components/sidebar/sidebar';

import { HomePage } from './routes/home';
import { NewsPage } from './routes/news';
import { PokedexPage } from './routes/pokedex';
import { ItemdexPage } from './routes/itemdex';
import { GuidesPage } from './routes/guides';
import { ExplorerPage } from './routes/explorer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/itemdex' element={<ItemdexPage />} />
          <Route path='/guides' element={<GuidesPage />} />
          <Route path='/explorer' element={<ExplorerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
