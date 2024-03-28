import { Avatar, Grid, TextField, Typography, Button, Box, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import "../components/style.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editUserData } from "../redux/services/User";
import createToast from '../utils/createToast';

const Account = () => {
    const user = useSelector((state) => state?.user.data);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: user ? user.name : "",
        email: user ? user.email : "",
        phone: user ? user.phone : "",
        countryCode: user ? user.countryCode : "+91",
        password: "****************"
    })

    useEffect(() => {
        setData({
            name: user ? user.name : "",
            email: user ? user.email : "",
            phone: user ? Number(user.phone.substring(3)) : "",
            countryCode: user ? user.countryCode : "+91",
            password: "****************"
        })
    }, [user]);


    const [disabled, setDisabled] = useState([true, true, true, true, true])

    const handleClick = (index) => {
        const newArray = [...disabled]
        newArray[index] = !newArray[index]
        setDisabled(newArray);

        if(index === 3 && !newArray[3]){
            console.log("Password Changing")
            setData({...data, password: ""})
        }

        if(index === 3 && newArray[3]){
            console.log("Password Changed")
            editUserData(dispatch, {
                genres: user ? user.genres || []: [],
                languages: user ? user.languages || [] : [],
                password: data?.password
            })
        }

        if(index === 0 && newArray[0]){
            console.log("Name Changed")
            editUserData(dispatch, {
                name: data?.name,
                genres: user ? user.genres || []: [],
                languages: user ? user.languages || [] : [],
            })
        }
    }

    const handleChange = (name, value) => {
        setData({ ...data, [name]: value })
    }

    const handleLogOut = () => {
        console.log("Reached")
        localStorage.removeItem("token");
        createToast("Logged Out Successfully", "success")
        navigate("/");
    }

    const boxStyle = { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }
    const inputStyle = { border: "none", backgroundColor: "transparent" }
    const editButtonStyle = { backgroundColor: "#747474", color: "white", ":hover": { backgroundColor: "transparent" }, borderRadius: "50%", height: "40px", width: "40px", minWidth: 0 }
    const inputBoxStyle = { border: "1px solid #747474", p: 1, pl: 2, borderRadius: "30px", display: "flex", width: "100%", mb: 2, justifyContent: "space-between" }

    return (
        <>
            <Grid container sx={{ pb: 3, borderBottom: "1px solid #747474" }}>
                <Grid item xs={12}>
                    <Typography variant="h5">Account</Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box sx={boxStyle}>
                        <Avatar sx={{ height: '150px', width: '150px', mb: 2 }} />
                        <Button variant="contained" onClick={handleLogOut}>Logout</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box sx={inputBoxStyle}>
                        <input
                            type="text"
                            style={{ ...inputStyle, width: "90%" }}
                            className='account-field'
                            value={data.name}
                            disabled={disabled[0]}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                        <Button variant="contained" sx={editButtonStyle} onClick={() => handleClick(0)}>
                            {disabled[0] ? <EditIcon /> : <DoneIcon />}
                        </Button>
                    </Box>
                    <Box sx={inputBoxStyle}>
                        <input
                            type="email"
                            style={{ ...inputStyle, width: "90%" }}
                            className='account-field'
                            value={data.email}
                            disabled={disabled[1]}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                        <Button variant="contained" sx={[editButtonStyle, { background: 'transparent'}]}>
                            {<DoneIcon />}
                        </Button>
                    </Box>
                    <Box sx={inputBoxStyle}>
                        <select
                            className="account-field"
                            style={inputStyle}
                            value={data.countryCode}
                            disabled={disabled[2]}
                            onChange={(e) => handleChange("countryCode", e.target.value)}
                        >
                            <option value="+91">+91</option>
                        </select>
                        <input
                            type="number"
                            style={{ ...inputStyle, width: "80%", paddingLeft: "10px", borderLeft: "1px solid #747474" }}
                            className='account-field'
                            value={data.phone}
                            disabled={disabled[2]}
                            onChange={(e) => handleChange("phone", e.target.value)}
                        />
                        <Button variant="contained" sx={[editButtonStyle, { background: 'transparent'}]}>
                            {<DoneIcon />}
                        </Button>
                    </Box>
                    <Box sx={inputBoxStyle}>
                        <input
                            type={`${disabled[3] ? "password" : "text"}`}
                            style={{ ...inputStyle, width: "90%" }}
                            className='account-field'
                            value={data.password}
                            disabled={disabled[3]}
                            onChange={(e) => handleChange("password", e.target.value)}
                        />
                        <Button variant="contained" sx={editButtonStyle} onClick={() => handleClick(3)}>
                            {disabled[3] ? <EditIcon /> : <DoneIcon />}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Account;