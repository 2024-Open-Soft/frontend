import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const SearchRelevantResult = () => {

    const MovieInfo = [
        {
            "src": "./12thfail.jpeg",
            "title": "12th Fail"
        },
        {
            "src": "./12thfail.jpeg",
            "title": "12th Fail"
        },{
            "src": "./12thfail.jpeg",
            "title": "12th Fail"
        },{
            "src": "./12thfail.jpeg",
            "title": "12th Fail"
        },{
            "src": "./12thfail.jpeg",
            "title": "12th Fail"
        },{
            "src": "./12thfail.jpeg",
            "title": "12th Fail"
        },{
            "src": "./12thfail.jpeg",
            "title": "12th Fail"
        },{
            "src": "./12thfail.jpeg",
            "title": "12th Fail"
        },{
            "src": "./12thfail.jpeg",
            "title": "12th Fail"
        },{
            "src": "./12thfail.jpeg",
            "title": "12th Fail"
        },
        
    ]

    return(
        <Container className="mx-8 my-4">
            <Typography className="uppercase font-extrabold text-xl mx-4 my-8"> RElevant result </Typography>

            <Grid container spacing={4}>
                {MovieInfo.map((MovieData, index) => (
                <Grid item xs={2} sm={4} md={2.4} key={index} p-3 m-2 minWidth={60} className="flex">
                    <Box>
                        <img src={MovieData.src} alt={MovieData.title}></img>
                        <Typography className="text-gray-200 font-semibold text-sm mb-2 mx-2">{MovieData.title}</Typography>
                    </Box>
                </Grid> 
                ))}
            </Grid>
        </Container>
    );
}

export default SearchRelevantResult;