import React, { useState } from 'react';
import { InputBase, IconButton, Box, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const SearchBar = () => {

    const [data, setData] = useState([
        {
            id: 1,
            query: "The Shawshank Redemption"
        },
        {
            id: 2,
            query: "The Godfather"
        },
        {
            id: 3,
            query: "The Dark Knight"
        },
        {
            id: 4,
            query: "12 Angry Men"
        },
        {
            id: 5,
            query: "Schindler's List"
        }
    ])

    const boxStyle = {
        width: "100%",
    }

    const autoCompleteStyle = {
        width: "100%",
        color: "#FFFFFF",
        "& fieldset": {
            border: "none"
        },
        borderRadius: "30px",
        px: 1,
    }

    const buttonStyle = {
        backgroundColor: "#51504f",
        borderRadius: "40px",
        height: "40px",
        minWidth: "0px"
    }

    const [isActive, setIsActive] = useState(false)
    const [semantic, setSemantic] = useState(false)

    return (
        <Box sx={boxStyle}>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={data.map((option) => option.query)}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Button sx={buttonStyle}>
                                        <MicIcon />
                                    </Button>
                                </InputAdornment>),
                            disableUnderline: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button sx={{ ...buttonStyle, width: semantic ? "auto" : "40px", p: 0 }} onClick={() => setSemantic(!semantic)}>
                                        {semantic && <Typography sx={{ fontSize: "0.8rem", px: 2 }}>Semantic</Typography>}
                                        <Button
                                            sx={{
                                                height: "40px",
                                                width: "40px",
                                                borderRadius: "40px",
                                                backgroundColor: "#747474",
                                                p: 0,
                                                minWidth: 0
                                            }}
                                        ><StarIcon /></Button>
                                    </Button>
                                </InputAdornment>
                            ),
                            sx: {
                                color: "#FFFFFF",
                                backgroundColor: "#272828",
                                borderRadius: "30px",
                            }
                        }}
                        onFocus={() => setIsActive(true)}
                        onBlur={() => setIsActive(false)}
                        value="&lt;b&gt;Some text&lt;b/&gt;"
                    />
                }
                // renderOption={(props, option) => {
                //     const { query } = option;
                //     return (
                //         <Typography {...props} style={{ backgroundColor: "#272828", color: "#FFFFFF" }}>
                //             {query}
                //         </Typography>
                //     );
                // }}
                sx={autoCompleteStyle}
            // open={false}

            />
        </Box>
    );
};

export default SearchBar;