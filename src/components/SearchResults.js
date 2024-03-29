import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SearchResults = ({data}) => {

    const headingStyle = {
        pb: 4,
        "&::after": {
            content: '""',
            display: "block",
            position: "absolute",
            width: "30px",
            background: "red",
            height: "5px",
            mt: 1.5,
        },
        textTransform: "uppercase",
    };
    console.log(data)
    return data && (
        <Container className="my-4 mx-0 px-0">
            <Typography sx={{ ...headingStyle, py: 4 }}>Relevant result</Typography>
            <Grid container spacing={4}>
                {data.map((movie, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={index} p-3 m-2 minWidth={60} className="flex">
                        <Link to={`/movie/${movie._id}`} style={{ textDecoration: "none"}}>
                            <Box>
                                <img src={movie.poster} alt={movie.title} style={{ width: "90%" }}></img>
                                <Typography className="my-2">{movie.title}</Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default SearchResults;