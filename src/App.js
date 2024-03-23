
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigation from "./pages/Navigation";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
