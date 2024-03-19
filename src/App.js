import './App.css';
import { Counter } from './features/counter/counter';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      <h1>Redux Store has been set up</h1>
        <Counter />
      </header>
    </div>
    </>
  );
}

export default App;
