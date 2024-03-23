import React, {useState} from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';

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

    return <Stack direction="row" spacing={2} sx={{ width: 1000 }}>
        <SearchIcon />
        <Autocomplete 
        freeSolo
        options={states}
        renderInput={(params)=> <TextField {...params} label="Search for a Movie" />}
        autoComplete={true}
        autoHighlight={true}
        fullWidth
        />
        {
            <div onClick={handleClick}>
                {isSemantic ? <StarIcon /> : <StarOutlineIcon />}
            </div>
        }
        
    </Stack>;
}

export default SearchBar;