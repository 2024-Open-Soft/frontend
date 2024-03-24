import React, {useState} from "react";
import { Autocomplete, Box, Button, Container, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
]

const SearchBar = () => {
    const [isSemantic, setIsSemantic] = useState(false);

    const handleClick = () => {
      setIsSemantic(!isSemantic);
    };

    return <Container className="flex flex-row hover:bg-slate-500/65 bg-slate-300/45 rounded-full px-2 mt-12 mb-2 items-center">
        {isSemantic?
        <SavedSearchIcon className="m-2 size-8 fill-yellow-500"/>
        :
        <SearchIcon className="m-2 size-8"/>
        }
        <Autocomplete 
        className="border-0 rounded-none"
        freeSolo
        options={states}
        renderInput={(params)=> <TextField {...params} label="Search for a Movie" />}
        autoComplete={true}
        autoHighlight={true}
        fullWidth
        />
        {
            <Button onClick={handleClick} className="rounded-full">
                {isSemantic ? 
                <Box className="flex items-center mx-3 bg-slate-400/65 rounded-full">
                    <Typography className="text-xl text-yellow-500 capitalize rounded-full p-1.5 ml-4">Semantic</Typography>
                    <StarIcon className="m-2 size-10 fill-yellow-500 border-2 border-solid border-yellow-500 rounded-full p-1.5 bg-slate-200/50"/> 
                </Box>
                : 
                <StarIcon className="m-2 size-10 rounded-full bg-slate-200/50 p-1.5 fill-white"/>}
            </Button>
        }
        
    </Container>;
}

export default SearchBar;