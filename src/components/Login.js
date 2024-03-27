import { React, useState } from "react";
import axios from "axios";
import {
    Button,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/services/User";


const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async () => {
        await login(dispatch, { phoneNumber, password })
        console.log("Login Successfully Done")
        navigate("/")
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
                <TextField
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
                />
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
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Typography>
                <Typography align="left" sx={{ mt: 2 }}>
                    {"Having trouble logging in? "}
                    <Link href="#" variant="body1">
                        {"Get Help"}
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Login
