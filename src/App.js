import './index.css';
import { Counter } from './features/counter/counter';
import BackgroundPlayer from './components/BackgroundPlayer';
import Button from '@mui/material/Button';
import CastSlider from './components/CastSlider';

function App() {
  return (
    <>
    <div className="App">
      {/* <header className="App-header text-center ">
      <h1 className='text-2xlg font-sans'>Redux Store has been set up</h1>
        <Counter />
        <p className='text-lg font-mono'>tailwindcss set up done</p>
      <div>
        <br />
        <Button variant="contained">Material UI set up done</Button>
      </div>
      </header> */}
      {/* <BackgroundPlayer /> */}
      <CastSlider />
    </div>
    </>
  );
}

export default App;
