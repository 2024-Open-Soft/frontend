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
        <Container className="text-center md:text-start md:mx-8 md:my-4">
            <Typography className="uppercase font-extrabold text-xl mx-4 my-8"> Relevant result </Typography>

            <Grid container spacing={2} justifyContent="center">
                {MovieInfo.map((MovieData, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}> {/* Adjust column sizes for responsiveness */}
                        <Box>
                            <img src={MovieData.src} alt={MovieData.title} style={{ width: "100%", height: "auto" }} />
                            <Typography className="text-gray-200 font-semibold text-sm mb-2 mx-2">{MovieData.title}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default SearchRelevantResult;