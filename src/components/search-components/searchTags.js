import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const genres = [
    "Romance",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "Horror",
    "SciFi",
    "Thriller", 
    "Others",
];

const languages = [
    "Hindi",
    "English",
    "Marathi ",
    " Japanese ",
    "Bhojpuri",
    "Tamil",
    "Telgu",
    "Kannada",
    "Malayalam",
];

const SearchTags = () => {

    return <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
            
            <Grid item xs={8} className="px-0">
                <Container className="flex flex-col">
                    <Container className="flex justify-center">
                        <Typography className="mx-6 my-4">Genre</Typography>
                    </Container>
                    <Container className="flex flex-row overflow-scroll my-3 pb-2">
                        {genres.map(function(genres)
                        {
                            return(
                                <Button className="rounded-3xl bg-slate-700/50 hover:bg-slate-300/75 px-16 mx-1  text-gray-100 font-medium">
                                        {genres}
                                </Button>
                            )
                        }
                        )}
                    </Container>
                </Container>
            </Grid>    

            <Grid item xs={8}>
                <Container className="flex flex-col">
                    <Container className="flex justify-center">
                        <Typography className="mx-6 my-4 ">Language</Typography>
                    </Container>
                    <Container className="flex flex-row overflow-scroll my-3 pb-2">
                        {languages.map(function(languages)
                        {
                            return(
                                <Button className="rounded-3xl bg-slate-700/50 hover:bg-slate-300/75 px-16 mx-1  text-gray-100 font-medium">
                                        {languages}
                                </Button>
                            )
                        }
                        )}
                    </Container>
                </Container>
            </Grid>    
        </Grid>
    </Box>;
}

export default SearchTags;