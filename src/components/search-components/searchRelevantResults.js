import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const SearchRelevantResult = () => {

    return(
        <Container className="mx-8 my-4">
            <Typography className="uppercase font-extrabold text-xl m-3"> RElevant result </Typography>
            {/* <Grid container>
                <Grid item xs={3}>
                    <img src="./12thfail.jpeg" className="m-5"></img>
                </Grid>
                <Grid item xs={9}>
                    <Container>
                        <Typography className="font-extrabold text-3xl mx-8 my-3">12th Fail</Typography>
                        <Container className="p-2 m-4">
                            <Button className="bg-red-600 rounded-full px-6 py-3">
                                <PlayCircleOutlineIcon className="mr-2"/>
                                <Typography className="text-gray-200 font-medium">Watch</Typography>
                            </Button>
                            <Button className="bg-slate-700/50 rounded-full px-6 py-3 mx-3 hover:bg-slate-300/75">
                                <Typography className="text-gray-200 font-medium">
                                    Trailer
                                </Typography>
                            </Button>
                        </Container>
                        <Typography className="p-2 m-2 text-gray-100">
                        Based on the true story of IPS officer Manoj Kumar Sharma, 12th Fail sheds limelight on fearlessly embracing the idea of restarting the academic journey despite the setbacks and challenges and reclaiming one's destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC. 
                        </Typography>
                    </Container>
                </Grid>
            </Grid> */}
        </Container>
    );
}

export default SearchRelevantResult;