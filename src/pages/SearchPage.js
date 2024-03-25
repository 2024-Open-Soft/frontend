import React from "react";
import SearchTags from "../components/SearchTags";
import { Grid } from "@mui/material";
import SearchTopResult from "../components/SearchTopResult";
import SearchResults from "../components/SearchResults";
import CustomSearchBar from "../components/CustomSearchBar";

const SearchPage = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pl: {
          xs: "5vw",
          md: "10vw",
        },
        pr: {
          xs: "5vw",
          md: "5vw",
        },
        pt: {
          xs: "1vh",
          md: "15vh",
        },
        m: 0,
        width: "100%",
      }}
    >
      <Grid item xs={12} sx={{ p: 0 }}>
        <CustomSearchBar />
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 0, mt: 2 }}>
        <SearchTags />
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 0, mt: 2 }}>
        <SearchTags />
      </Grid>
      <Grid item xs={12} sx={{ p: 0 }}>
        <SearchTopResult />
      </Grid>
      <Grid item xs={12} sx={{ p: 0 }}>
        <SearchResults />
      </Grid>
    </Grid>
  );
};

export default SearchPage;
