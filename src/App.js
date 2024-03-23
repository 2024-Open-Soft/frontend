import './index.css';

import { Counter } from './features/counter/counter';
import BackgroundPlayer from './components/BackgroundPlayer';
import Button from '@mui/material/Button';
import SearchPage from './pages/search';


function App() {
  return (
    <>
    <div className="App">
      <SearchPage />
    </div>
    </>
  );
}

export default App;
