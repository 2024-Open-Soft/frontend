import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import MicIcon from '@mui/icons-material/Mic';

const dictionary = {
    words: ['hello', 'helium', 'world', 'car', 'carpet', 'test', 'this', 'that', 'those', 'working', 'is']
}

const CustomSearchBar = () => {
    const [prefix, setPrefix] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const [semantic, setSemantic] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [suggestions, setSuggestions] = useState([])


    const onChange = (e) => {
        var value = e.target.value;
        setPrefix(value);
        var words = value.split(" ");
        var last_word = words[words.length - 1].toLowerCase();
        var found_words = dictionary.words.filter(word => String(word).startsWith(last_word)).sort((a, b) => {
            return a.length - b.length;
        });
        setSuggestions(found_words);
        var first_word = found_words[0];
        if (
            found_words.length !== 0 &&
            value !== "" &&
            value[value.length - 1] !== " "
        ) {
            if (first_word != null) {
                var remainder = first_word.slice(last_word.length);
                setSuggestion(value + remainder);
            }
        } else {
            setSuggestion(value);
        }
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 39) {
            setPrefix(suggestion);
        }
    };

    const buttonStyle = {
        backgroundColor: "#51504f",
        borderRadius: "30px",
        height: "30px",
        width: "30px",
        minWidth: "0px"
    }

    const boxStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#272828",
        borderRadius: "30px",
        color: "#FFFFFF",
        height: "45px",
        px: 1,
        position: "relative"
    }

    const inputBoxStyle = {
        width: "90%",
        height: "30px",
    }

    const listBoxStyle = {
        // position: "absolute",
        // top: "55px",
        borderRadius: "30px",
        backgroundColor: "#272828",
        color: "#FFFFFF",
        py: 2,
        // zIndex: 20,
        width: "100%",
        marginTop: "10px",
        overflow: "auto"
    }

    const containerStyle = {
        width: "100%",
        position: "relative",
    }

    const listItemsStyle = {
        "&:hover": {
            backgroundColor: "#4f5051",
        },
        px: 2,
        py: 1 
    }


    return (
        <div style={containerStyle}>
            <Box sx={boxStyle}>
                <Button sx={buttonStyle}>
                    <MicIcon />
                </Button>
                <div className="search-bar" style={inputBoxStyle}>
                    <input
                        type="text"
                        name="search-bar"
                        id="search-bar"
                        placeholder="Search..."
                        value={prefix}
                        onChange={onChange}
                        onKeyDown={handleKeyDown}
                        onFocus={() => setIsActive(true)}
                        onBlur={() => setIsActive(false)}
                    />
                    <input
                        type="text"
                        name="search-bar"
                        id="search-bar2"
                        value={suggestion}
                    />
                </div>
                <Button sx={{ ...buttonStyle, width: semantic ? "auto" : "30px", p: 0 }} onClick={() => setSemantic(!semantic)}>
                    {semantic && <Typography sx={{ fontSize: "0.7rem", px: 2 }}>Semantic</Typography>}
                    <Button
                        sx={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "30px",
                            backgroundColor: "#747474",
                            p: 0,
                            minWidth: 0
                        }}
                    ><StarIcon /></Button>
                </Button>
            </Box>
            {isActive  && <Box sx={listBoxStyle}>
                {suggestions && suggestions?.map(suggestion => <Typography sx={listItemsStyle}>{suggestion}</Typography>)}
            </Box>}
        </div>
    );
}

export default CustomSearchBar;