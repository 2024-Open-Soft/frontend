import React from "react";
import { Box, Button, Container, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
// import Divider from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { data } from "autoprefixer";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

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
            
            <Grid item xs={8}>
                <Container className="flex flex-col">
                    <Container className="flex justify-center">
                        <Typography className="mx-6 my-4">Genre</Typography>
                    </Container>
                    <Container className="flex flex-row overflow-scroll my-3 py-2">
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
                    <Container className="flex flex-row overflow-scroll my-3 py-2">
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