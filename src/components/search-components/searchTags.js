import React, {useState} from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const genresTitleArray = [
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
    const [genres, setGenres] = useState([
        {
            title: "",
            selected: false
        }
    ]);

    const selectedGenres = [];

    const [R,setR] = useState(true);
    const [A,setA] = useState(true);
    const [C,setC] = useState(true);
    const [CR,setCR] = useState(true);
    const [D,setD] = useState(true);
    const [H,setH] = useState(true);
    const [S,setS] = useState(true);
    const [T,setT] = useState(true);
    const [O,setO] = useState(true);

    const [Hindi,setHindi] = useState(true);
    const [E,setE] = useState(true);
    const [M,setM] = useState(true);
    const [B,setB] = useState(true);
    const [Tamil,setTamil] = useState(true);
    const [Telgu,setTelgu] = useState(true);
    const [K,setK] = useState(true);
    const [Mal,setMal] = useState(true);
    const [J,setJ] = useState(true);

    const handleGenresClick = (genres) => {
        selectedGenres.push(genres);
        console.warn(selectedGenres);
    };

    const handleRClick = () => {
        
    }

    const initialClass = "border border-solid rounded-3xl bg-slate-700/50 hover:bg-slate-300/75 px-16 mx-1 text-gray-100 font-medium";
    const clickedClass = "border border-solid border-green-500 rounded-full bg-green-500  px-16 mx-1 text-green-100 font-medium";

    // const buttonClass = clicked ? clickedClass : initialClass;

    return <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
            
            <Grid item xs={8} className="px-0">
                <Container className="flex flex-col">
                    <Container className="flex justify-center">
                        {/* <Typography className="mx-6 my-4">Genre</Typography> */}
                    </Container>
                    <Container className="flex flex-row overflow-scroll my-3 pb-2">
                        
                                <Button 
                                // key={genre}
                                onClick={() => setR(!R)}
                                className={R?initialClass:clickedClass}
                                >
                                    Romance
                                </Button>
                                <Button 
                                // key={genre}
                                onClick={() => setA(!A)}
                                className={A?initialClass:clickedClass}
                                >
                                    Animation
                                </Button>
                                <Button 
                                // key={genre}
                                onClick={() => setC(!C)}
                                className={C?initialClass:clickedClass}
                                >
                                    Comedy
                                </Button>
                                <Button 
                                // key={genre}
                                onClick={() => setCR(!CR)}
                                className={CR?initialClass:clickedClass}
                                >
                                    Crime
                                </Button>
                                <Button 
                                // key={genre}
                                onClick={() => setD(!D)}
                                className={D?initialClass:clickedClass}
                                >
                                    Drama
                                </Button>
                                <Button 
                                // key={genre}
                                onClick={() => setH(!H)}
                                className={H?initialClass:clickedClass}
                                >
                                    Horror
                                </Button>
                                <Button 
                                // key={genre}
                                onClick={() => setS(!S)}
                                className={S?initialClass:clickedClass}
                                >
                                    SciFi
                                </Button>
                                <Button 
                                // key={genre}
                                onClick={() => setT(!T)}
                                className={T?initialClass:clickedClass}
                                >
                                    Thriller
                                </Button>
                                <Button 
                                // key={genre}
                                onClick={() => setO(!O)}
                                className={O?initialClass:clickedClass}
                                >
                                    Others
                                </Button>


                        {/* {genresTitleArray.map(function(genre)
                        {
                            return(

                                <Button 
                                // key={genre}
                                onClick={() => handleGenresClick(genre)}
                                className={initialClass}
                                >
                                    {genre}
                                </Button>
                            )
                        }
                        )}
                         */}
                    </Container>
                </Container>
            </Grid>    

            <Grid item xs={8}>
                <Container className="flex flex-col">
                    <Container className="flex justify-center">
                        {/* <Typography className="mx-6 my-4 ">Language</Typography> */}
                    </Container>
                    <Container className="flex flex-row overflow-scroll my-3 pb-2">
                        {/* {languages.map(function(languages)
                        {
                            return(
                                <Button className="rounded-3xl bg-slate-700/50 hover:bg-slate-300/75 px-16 mx-1  text-gray-100 font-medium">
                                        {languages}
                                </Button>
                            )
                        }
                        )} */}

                        <Button 
                        onClick={() => setHindi(!Hindi)}
                        className={Hindi?initialClass:clickedClass}
                        >
                            Hindi
                        </Button>

                        <Button 
                        onClick={() => setE(!E)}
                        className={E?initialClass:clickedClass}
                        >
                            English
                        </Button>

                        <Button 
                        onClick={() => setM(!M)}
                        className={M?initialClass:clickedClass}
                        >
                            Marathi
                        </Button>

                        <Button 
                        onClick={() => setJ(!J)}
                        className={J?initialClass:clickedClass}
                        >
                            Japanese
                        </Button>

                        <Button 
                        onClick={() => setK(!K)}
                        className={K?initialClass:clickedClass}
                        >
                            Kannada
                        </Button>

                        <Button 
                        onClick={() => setTamil(!Tamil)}
                        className={Tamil?initialClass:clickedClass}
                        >
                            Tamil
                        </Button>

                        <Button 
                        onClick={() => setTelgu(!Telgu)}
                        className={Telgu?initialClass:clickedClass}
                        >
                            Telgu
                        </Button>

                        <Button 
                        onClick={() => setB(!B)}
                        className={B?initialClass:clickedClass}
                        >
                            Bhojpuri
                        </Button>

                        <Button 
                        onClick={() => setMal(!Mal)}
                        className={Mal?initialClass:clickedClass}
                        >
                            Malayalam
                        </Button>
                        

                    </Container>
                </Container>
            </Grid>    
        </Grid>
    </Box>;
}

export default SearchTags;