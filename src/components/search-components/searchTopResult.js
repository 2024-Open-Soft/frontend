import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const SearchTopResult = () => {
    return (
        <Container className="text-center md:text-start md:mx-auto md:my-4"> {/* Updated className for centering */}
            <Typography className="uppercase font-extrabold text-center md:text-start text-3xl m-2 md:m-3"> Top result </Typography>
            <Grid container className="flex flex-col md:flex-row justify-center items-center"> {/* Added justify-center and items-center for centering */}
                <Grid item xs={12} md={3}> {/* Updated xs to 12 for full width on smaller screens */}
                    <img src="./12thfail.jpeg" className="m-5" alt="12th Fail Image" /> {/* Added alt attribute for accessibility */}
                </Grid>
                <Grid item xs={12} md={9} className="md:items-center"> {/* Updated xs to 12 for full width on smaller screens */}
                    <Container>
                        <Typography className="font-extrabold text-3xl mx-1 my-1 md:mx-8 md:my-3">12th Fail</Typography>
                        <Container className="p-1 m-2 md:p-2 md:m-4 flex flex-col md:flex-row">
                            <Button className="bg-red-600 rounded-full md:px-6 md:py-3 m-1 ">
                                <PlayCircleOutlineIcon className="mr-2"/>
                                <Typography className="text-gray-200 font-medium">Watch</Typography>
                            </Button>
                            <Button className="bg-slate-700/50 rounded-full px-2 py-1 md:px-6 md:py-3 m-1 mx-3 hover:bg-slate-300/75">
                                <Typography className="text-gray-200 font-medium">
                                    Trailer
                                </Typography>
                            </Button>
                        </Container>
                        <Typography className="md:p-2 md:m-2 text-gray-100">
                            Based on the true story of IPS officer Manoj Kumar Sharma, 12th Fail sheds limelight on fearlessly embracing the idea of restarting the academic journey despite the setbacks and challenges and reclaiming one's destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC.
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SearchTopResult;
