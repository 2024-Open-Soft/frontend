import { React, useState } from "react";
import {
    Autocomplete,
    Box,
    Button,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/services/User";

const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+81", country: "Japan" },
];

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async () => {
        const res = await login(dispatch, { phoneNumber: `${countryCode.code}${phone}`, password });
        console.log(res);
        if(res.status === 200)
            navigate("/");
    };

    return (
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
            <Grid
                item
                xs={12}
                sm={12}
                md={7}
                sx={{
                    background: "#000000b3",
                    backdropFilter: "blur(15px)",
                    p: { xs: 2, md: 6 },
                    borderRadius: "0 25px 25px 0",
                }}
            >
                <Typography variant="" sx={{ fontSize: "large" }}>
                    Enter Phone Number
                </Typography>
                {/* <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phoneNumber"
                    type="text"
                    // label="Enter email"
                    name="phoneNumber"
                    autoComplete="phoneNumber"
                    autoFocus
                    sx={{ mt: 1, mb: 2 }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                /> */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        md: { flexDirection: "column" },
                    }}
                >
                    <Autocomplete
                        id="combo-box-demo"
                        options={countryCodes}
                        getOptionLabel={(option) => option.code}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                onSubmit={handleSubmit}
                                id="countryCode"
                                name="countryCode"
                                variant="outlined"
                            />
                        )}
                        disableClearable
                        sx={{ mt: 1, mb: 2, mr: 2, width: "5rem" }}
                        onChange={(event, newValue) => {
                            setCountryCode(newValue);
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        name="phone"
                        autoComplete="phone"
                        type="number"
                        placeholder="000 000 0000"
                        autoFocus
                        sx={{
                            mt: 1,
                            mb: 2,
                            mr: 2,
                            p: 0,
                            "& .MuiOutlinedInput-input": {
                                borderColor: "#ffffff83",
                                py: 2,
                            },
                        }}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Box>

                <Typography variant="" sx={{ fontSize: "large" }}>
                    Enter Password
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    // label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    sx={{ mt: 1, mb: 2 }}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                >
                    LOGIN
                </Button>
                <Typography align="left">
                    <Link to="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Typography>
                <Typography align="left" sx={{ mt: 2 }}>
                    {"Having trouble logging in? "}
                    <Link to="#" variant="body1">
                        {"Get Help"}
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Login
