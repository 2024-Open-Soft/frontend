import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigation from "./pages/Navigation";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Arial",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
          "& fieldset": {
            borderColor: "#ffffff83",
          },
        },
        input: {
          backgroundColor: "#FFFFFF00",
          color: "#ffffffb3",
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 200px #0000009e inset",
            WebkitTextFillColor: "#ffffffb3",
            caretColor: "#ffffff",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#e60000",
          borderRadius: "20px",
          color: "#e6e6e6",
          "&:hover": {
            backgroundColor: "#ff0000",
            color: "white",
          },
          boxShadow: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Navigation />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
