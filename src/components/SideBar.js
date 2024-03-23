import React, { useState } from "react";
// import { Paper, Drawer } from '@mui/material';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import IconButton from '@mui/material';

import { Box, Button } from "@mui/material";

// const styles = {
//   drawer: {
//     borderRadius: '16px', // Set border radius for the drawer
//     backgroundColor: '#fff', // Set background color
//     boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', // Optional shadow
//   },
// };

// const MyDrawer = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDrawer = (open) => {
//     setIsOpen(open);
//   };

//   return (
//     <>
//       <button onClick={() => toggleDrawer(true)} >
//         <MenuRoundedIcon />
//       </button>
//       <Drawer
//         anchor="top"
//         open={isOpen}
//         onClose={() => toggleDrawer(false)}
//         PaperProps={{ style: { borderRadius: 16 } }} // Set border radius for rounded box
//       >
//         <Paper sx={{ padding: '16px' }}>
//           {/* Drawer content */}
//           Your drawer content goes here
//         </Paper>
//       </Drawer>
//     </>
//   );
// };

// export default MyDrawer;

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';

export const SideBar = () => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "50px",
    backgroundColor: "rgba(171, 171, 171, 0.2)",
    // opacity:"100%",
    position: "fixed",
    top: "20%",
    left: "2%",
    width: "80px",
    height: "392px",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    padding: "10px",
    margin: "5px",
    borderRadius: "100%",
    minWidth: "0px",
    width: "50px",
    height: "50px",
    boxShadow: "none",
    "&:hover": { background: "rgba(255, 255, 255, 0.2)"}
  };

  return (
    <>
      <Box sx={boxStyle}>
        <Button variant="contained" sx={{...buttonStyle}}>
          <HomeIcon />
        </Button>
        <Button variant="contained" sx={buttonStyle}>
          <SearchIcon />
        </Button>
        <Button variant="contained" sx={buttonStyle}>
          <BookmarkBorderIcon />
        </Button>
        <Button variant="contained" sx={buttonStyle}>
          <TrendingUpRoundedIcon />
        </Button>
        <Button variant="contained" sx={buttonStyle}>
          <PersonOutlineRoundedIcon />
        </Button>
        <Button variant="contained" sx={buttonStyle}>
          <PendingOutlinedIcon />
        </Button>
      </Box>
    </>
  );
};
