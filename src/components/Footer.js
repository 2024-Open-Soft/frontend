import { Grid, Link, List, ListItem, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/system";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  const linkStyle = { textDecoration: "none", color: "#939393" };

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          pb: 3,
        }}
      >
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6">Company</Typography>
          <List>
            <ListItem sx={{ px: 0 }}>
              <Link href="#" sx={linkStyle}>
                About Us
              </Link>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <Link href="#" sx={linkStyle}>
                Careers
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6">Languages</Typography>
          <List>
            <ListItem sx={{ px: 0 }}>
              <Link href="#" sx={linkStyle}>
                English
              </Link>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <Link href="#" sx={linkStyle}>
                Hindi
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6">Need Help</Typography>
          <List>
            <ListItem sx={{ px: 0 }}>
              <Link href="#" sx={linkStyle}>
                Visit Help Center
              </Link>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <Link href="#" sx={linkStyle}>
                Share Feedback
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6">Connect With Us</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Link href="#" sx={{ ...linkStyle, pr: 2 }}>
              <FacebookIcon />
            </Link>
            <Link href="#" sx={{ ...linkStyle, pr: 2 }}>
              <InstagramIcon />
            </Link>
            <Link href="#" sx={{ ...linkStyle, pr: 2 }}>
              <XIcon />
            </Link>
            <Link href="#" sx={{ ...linkStyle, pr: 2 }}>
              <YouTubeIcon />
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{
          pb: 3,
        }}
      >
        <Grid item xs={12}>
          <Typography sx={{ p: 0 }}>&#169; WIIO All Rights Reserved</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Link href="#" sx={{ ...linkStyle, pr: 2 }}>
              Terms of Use
            </Link>
            <Link href="#" sx={{ ...linkStyle, pr: 2 }}>
              Privacy Policy
            </Link>
            <Link href="#" sx={{ ...linkStyle, pr: 2 }}>
              FAQ
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
