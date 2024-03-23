import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";
import { SideBar } from "./SideBar";
import HomeIcon from "@mui/icons-material/Home";


export default function MenuPopupState() {
    const buttonStyle = {
        backgroundColor: "black",
        padding: "0px",
        margin: "0px",
        borderRadius: "100%",
        width: "80px",
        height: "80px",
        boxShadow: "none",
        "&:hover": { background: "rgba(255, 255, 255, 0.2)"}
      };
  const popButtonStyle = {
    backgroundColor: "black",
    color: "black",
    borderRadius: "100%",
    padding: "10px",
    margin: "10px",
    border: "none",
    width: "100px",
    height: "100px",
    backgroundColor: "#000000",
    opacity: "80%",
    position: "fixed",
  };

  const menuStyle = {
    backgroundColor: "white",
    borderRadius: "80px",
    padding: "10px",
    margin: "10px",
    border: "none",
    width: "100px",
    height: "400px",
    backgroundColor: "#000000",
    opacity: "85%",
    position: "fixed",
    justifyContent: "center",
  };

  const menuItemStyle = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "50px",
    padding: "10px",
    margin: "10px",
    border: "none",
    width: "80px",
    height: "50px",
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            sx={{ ...popButtonStyle }}
          >
            <MenuIcon />
          </Button>
          <Menu {...bindMenu(popupState)} sx={{...menuStyle}}>
            <MenuItem onClick={popupState.close} sx={{}} >
              <Button variant="contained" sx={{ ...buttonStyle }}>
                <HomeIcon />
              </Button>
            </MenuItem>
            <MenuItem onClick={popupState.close} sx={{...menuItemStyle}}>My account</MenuItem>
            <MenuItem onClick={popupState.close} sx={{...menuItemStyle}}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
