import React from "react";
import { Container, Input } from '@mui/material';
import SearchBar from "../components/search-components/searchBar";
import SearchTags from "../components/search-components/searchTags";
import {CssBaseline} from "@mui/material";

function SearchPage() {
    return(
      <Container >
        <SearchBar />
        <SearchTags />
        
      </Container>
        // <div className="container search-page-container p-6 m-6">
        //     <div className="relative flex-column items-center w-full">
        //     </div>
        // </div>
    );
}

export default SearchPage;