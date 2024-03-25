import './index.css';
// import { Counter } from './features/counter/counter';
import  WatchlistPage  from './features/WatchlistPage';

// import Button from '@mui/material/Button';

function App() {
  return (
    <>
    
    <div className="App">
      {/* <header className="App-header text-center ">
      <h1 className='text-2xlg font-sans'>Redux Store has been set up</h1> */}
        {/* <Counter /> */}
        <WatchlistPage/>
        {/* <p className='text-lg font-mono'>tailwindcss set up done</p>
      <div>
        <br />
        <Button variant="contained">Material UI set up done</Button>
      </div>
      </header> */}
    </div>
    </>
  );
}

export default App;
