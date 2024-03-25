import { React, useState } from "react";
import {
  Grid, Typography,
} from "@mui/material";
import Register from "../components/Register";
import VerificationPhone from "../components/VerificationPhone";
import VerificationEmail from "../components/VerificationEmail";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const SubscriptionForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div style={{ paddingTop: "100px" }}>
      <Grid
        container
        sx={{
          margin: "auto",
          width: "80%",
          maxWidth: "900px",
        }}
      >
        <Grid item xs={false} sm={false} md={5} sx={{ display: "flex" }}>
          <div className="bg-black w-full rounded-l-xl md:px-14 md:py-8 " style={{borderRadius: "25px 0 0 25px"}}>
            <Typography className="white text-2xl font-bold"> Basic </Typography>
            <Typography className="white font-normal my-2">
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
        {step === 1 && <VerificationPhone setStep={setStep} />}
        {step === 2 && <VerificationEmail setStep={setStep} />}
        {step === 3 && <Register setStep={setStep} />}
      </Grid>
    </div>
  );
};

export default SubscriptionForm;
