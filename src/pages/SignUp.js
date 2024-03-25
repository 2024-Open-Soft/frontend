import { React, useEffect, useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Register from "../components/Register";
import VerificationPhone from "../components/VerificationPhone";
import VerificationEmail from "../components/VerificationEmail";

const SignUp = () => {
  const [step, setStep] = useState(1);
  console.log(step);

  // const handleStep = () => {};
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
          <img
            src="/movies.png"
            alt="background"
            style={{
              width: "100%",
              borderRadius: "25px 0 0 25px",
              objectFit: "cover",
              objectPosition: "left",
            }}
          />
        </Grid>
        {step === 1 && <VerificationPhone setStep={setStep} />}
        {step === 2 && <VerificationEmail setStep={setStep} />}
        {step === 3 && <Register setStep={setStep} />}
      </Grid>
    </div>
  );
};

export default SignUp;
