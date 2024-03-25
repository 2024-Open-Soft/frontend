import { React, useState } from "react";
import {
  Grid, Typography, Box, Link, Autocomplete, TextField, Button
} from "@mui/material";
import Register from "../components/Register";
import VerificationPhone from "../components/VerificationPhone";
import VerificationEmail from "../components/VerificationEmail";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import MonthsSelect from "../components/MonthsSelect";

const SubscriptionForm = () => {
  const [step, setStep] = useState(1);

  const handleBuyNow = () => {
    console.log("handle buy now");
  }

  const handleApply = () => {
    console.log("handle apply");
  }

  const plansArray =    [
    "Basic",
    "Standard",
    "Premium",
    "Platinum"
  ];
  

  return (
    <div style={{ paddingTop: "100px" }} className="mb-10">
      <Grid
        container
        className="flex flex-col-reverse md:flex-row"
        sx={{
          margin: "auto",
          width: "80%",
          maxWidth: "900px",
        }}
      >
        <Grid item xs={false} sm={false} md={5} sx={{ display: "flex" }}
        >
          <div className="bg-black w-full md:px-14 md:py-8 md:rounded-l-3xl" >
            <Typography className="white text-2xl font-bold text-center md:text-start"> Basic </Typography>
            <Typography className="white font-normal my-2 text-center md:text-start">
                <span className="text-6xl font-extrabold">$5</span>
                <span className="text-3xl">/mo</span>
            </Typography>
            <div className="p-2">
                <ul className="list-none">
                    <div className="flex flex-row items-center font-semibold"> <CheckCircleRoundedIcon/> <Typography className="m-2 ">Max resolution - 480p</Typography> </div>
                    <div className="flex flex-row items-center"> <CheckCircleRoundedIcon/> <Typography className="m-2 ">Availabe on 3 devices</Typography> </div>
                    <div className="flex flex-row items-center"> <CheckCircleRoundedIcon/> <Typography className="m-2 ">Video and sound quality</Typography> </div>
                    <div className="flex flex-row items-center"> <CheckCircleRoundedIcon/> <Typography className="m-2 ">Availabile for 6 months</Typography> </div>
                    <div className="flex flex-row items-center"> <CheckCircleRoundedIcon/> <Typography className="m-2 ">Starts on 22/11/2025</Typography> </div>
                </ul>
            </div>
            <div className="flex justify-center py-4 px-4">
                <div className="bg-gray-500 rounded-xl py-2 pr-10 pl-2 w-full" >
                    <Typography className="uppercase font-bold m-2">Total Price</Typography>
                    <Typography className="uppercase text-5xl font-bold m-4">$30</Typography>
                </div>
            </div>
          </div>
        </Grid>

        <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{
                background: "#000000b3",
                backdropFilter: "blur(15px)",
                p: { xs: 2, md: 4 },
                py: { xs: 4, md: 2 },
            }}
            className="md:rounded-r-3xl"
        >
            <Box
                component="form"
                // noValidate
                display="flex"
                flexDirection={"column"}
                // onSubmit={handleBuyNow}
                className="px-2 flex"
                sx={{
                my: {
                    xs: 4,
                    sm: 6,
                },
                mx: {
                    xs: 0,
                    sm: 2,
                },
                }}
            >
                <Typography variant="" sx={{ fontSize: "large" }}>
                    Select Plan
                </Typography>
                <Autocomplete 
                    id="combo-box-demo"
                    options={plansArray}
                    renderInput={(params) => <TextField {...params} required/>}
                    disableClearable
                    sx={{ mt: 1, mb: 2, mr: 2, }}
                    defaultValue="Basic"
                />

                <Typography variant="" sx={{ fontSize: "large" }}>
                    Enter Duration (Months)
                </Typography>
                <TextField
                    id="outlined-number"
                    label=""
                    type="number"
                    defaultValue={6}
                    sx={{ mt: 1, mb: 2, mr: 2, }}
                    InputLabelProps={{
                        shrink: true,
                      }}
                />

                <Typography variant="" sx={{fontSize: "large"}} >
                    Start Date
                </Typography>
                <TextField
                    label=""
                    type="date"
                    placeholder="DD/MM/YYYY"
                    sx={{ mt: 1, mb: 2, mr: 2, }}
                    InputLabelProps={{
                        shrink: true,
                      }}
                />

                <Typography variant="" sx={{fontSize: "large"}} >
                    Discount Coupon
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        width: "100%",
                      }}
                >
                    <TextField 
                        sx={{
                            mt:1,
                            mb:2,
                            mr: 2,
                            gap: "10px",
                            borderRadius: "10rem",
                            height: "auto",
                          }}
                    />
                    <Button
                        sx={{
                        height: "3.5rem",
                        px: 6,
                        }}
                        size="large"
                        color="success"
                        variant="contained"
                        onClick={handleApply}
                        className="bg-green-500 uppercase rounded-full text-lg"
                    >
                        Apply
                    </Button>                    
                </Box>

                <Button
                        sx={{
                        height: "3.5rem",
                        px: 6,
                        mt:1,
                        mb:2,
                        mr: 2,
                        }}
                        size="large"
                        color="success"
                        variant="contained"
                        onClick={handleApply}
                        className="justify-self-center uppercase rounded-full text-lg w-fit font-semibold"
                    >
                        Buy Now
                </Button> 

                <Typography
                align="left"
                sx={{ mt: 2, fontStyle: "italic", opacity: "80%" }}
                >
                {"Having trouble in payment? "}
                <Link href="#" variant="body1">
                    {"Get Help"}
                </Link>
                </Typography>
            </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default SubscriptionForm;
