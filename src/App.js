import React from "react";
import "./index.css";
import { SideBar } from "./components/SideBar";
import MenuPopupState from "./components/HamBurger";

import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <div className="App">
        <SideBar />
      </div>
    </>
  );
}

export default App;
