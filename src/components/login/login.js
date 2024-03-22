import React, { useState } from "react";
import Button from "@mui/material/Button";
import { MuiOtpInput } from "mui-one-time-password-input";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const LoginPage = () => {
  const [countryCode, setCountryCode] = useState("+91");

  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+81", country: "Japan" },
  ];

  const handleChange = (event) => {
    setCountryCode(event.target.value);
  };

  const [value, setValue] = React.useState("");

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <section
      className="flex font-sans items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-40 w-1/2 h-3/5 rounded-3xl filter backdrop-filter backdrop-blur-md flex flex-row overflow-hidden">
        <div
          className="flex items-start bg-cover h-full w-2/5"
          style={{ backgroundImage: "url('/bg1.jpg')" }}
        ></div>
        <div className="w-3/5 p-4 h-full">
          <h1 className="text-2xl ml-10 mt-10 font-semibold text-white">
            Enter Phone Number
          </h1>
          <form className="flex flex-row items-center justify-center mt-8">
            <Autocomplete
              id="combo-box-demo"
              options={countryCodes}
              getOptionLabel={(option) => option.code}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
              onChange={(event, newValue) => {
                setCountryCode(newValue);
              }}
              className="mr-4 w-auto h-11 rounded-lg border-white bg-transparent opacity-80 border-[1px]"
              style={{ color: "white", fontSize: "20px" }}
            />
            <input
              className="mr-8 w-1/2 h-11 rounded-lg border-white bg-transparent opacity-80 border-[1px]"
              placeholder="000 000 0000"
              style={{ color: "white", fontSize: "20px", padding: "1rem" }}
            />
            <Button
              sx={{
                borderRadius: "10rem",
                opacity: "90%",
                width: "6rem",
                height: "3rem",
                boxShadow: "0",
              }}
              size="large"
              variant="contained"
            >
              Send
            </Button>
          </form>
          <h1 className="text-2xl ml-10 mt-10 font-semibold text-white">
            Enter OTP
          </h1>
          <form className="flex flex-row items-center justify-center mt-8">
            <MuiOtpInput
                className="mr-8"
                sx={{borderRadius: "10rem", opacity: "90%", width: "70%", height: "3rem", boxShadow: "0"
                  }}
                  length={6}
                  value={value}
                  onChange={handleValueChange}
                
            />
            <Button
              sx={{
                borderRadius: "10rem",
                opacity: "90%",
                width: "6rem",
                height: "3rem",
                boxShadow: "0",
              }}
              size="large"
              color="success"
              variant="contained"
            >
              Verify
            </Button>
          </form>
          <div className="mt-[12rem] ml-10 italic opacity-80 text-xl text-white">
            Having trouble logging in?{" "}
            <a href="#" className="decoration-[none]">
              Get Help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
