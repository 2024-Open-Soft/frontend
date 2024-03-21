import logo from "./logo.svg";
import "./App.css";
import BackgroundVideo from "./components/background";
import { increment } from "./actions/counter";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        {/* <header className="App-header">
          <h1>Redux Store has been set up</h1>
          <h1>Counter: {counter}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>

          <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header> */}

        <BackgroundVideo />
      </div>
    </>
  );
}

export default App;
