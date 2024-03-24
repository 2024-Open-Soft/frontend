import React from "react";
import { Container, Input } from '@mui/material';
import SearchBar from "../components/search-components/searchBar";
import SearchTags from "../components/search-components/searchTags";
import SearchTopResult from "../components/search-components/searchTopResult";

function SearchPage() {
    return(
      <Container >
        <SearchBar />
        <SearchTags />
        <SearchTopResult />        
      </Container>
    );
}

export default SearchPage;