import React from "react";
import { Input } from '@mui/material';
import SearchBar from "../components/searchBar";
import SearchTags from "../components/searchTags";

function SearchPage() {
    return(
        <div className="container search-page-container p-6 m-6">
            <div className="relative flex-column items-center w-full">
                <SearchBar />
                <SearchTags />
                    {/* <Input 
                    fullWidth={true}
                    /> */}
                {/* <input
                    type="search"
                    placeholder="Search"
                    className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 w-full"
                    />
                <svg
                    className="w-6 h-6 absolute fill-gray-400 right-3 top-1/2 -translate-y-1/2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    <path d="M15 11H9V1l-5 5v2h6v10l5-5zM4 11a7 7 0 1 1 14 0z" />
                </svg> */}
            </div>
        </div>
    );
}

export default SearchPage;