import React from "react";
import { Container, Input } from '@mui/material';
import SearchBar from "../components/search-components/searchBar";
import SearchTags from "../components/search-components/searchTags";
import SearchTopResult from "../components/search-components/searchTopResult";
import SearchRelevantResult from "../components/search-components/searchRelevantResults";

function SearchPage() {
    return(
      <Container >
        <SearchBar />
        <SearchTags />
        <SearchTopResult />
        <SearchRelevantResult />        
      </Container>
    );
}

export default SearchPage;