import { HeaderTabs } from './components/header';

import './App.css';

function App() {
  return (
    <div className='App'>
      <HeaderTabs user={{ name: 'Test', image: '' }} />
    </div>
  );
}

export default App;
