import { Avatar, Grid, TextField, Typography, Button, Box, Divider } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import "../components/style.css"

const Account = () => {

    const [name, setName] = useState("John Doe")
    const [email, setEmail] = useState("john.doe2024@gmail.com")
    const [phone, setPhone] = useState("9999999999")
    const [countryCode, setCountryCode] = useState("+91")
    const [password, setPassword] = React.useState("password")

    const [disabled, setDisabled] = useState([true, true, true, true, true])

    const handleClick = (index) => {
        const newArray = [...disabled]
        newArray[index] = !newArray[index]
        setDisabled(newArray)
    }

    const boxStyle = { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }
    const inputStyle = { border: "none", backgroundColor: "transparent", width: "400px", ":focus": { outline: "none" } }
    const editButtonStyle = { backgroundColor: "#747474", color: "white", ":hover": { backgroundColor: "transparent" }, borderRadius: "50%", height: "40px", width: "40px", minWidth: 0}
    const inputBoxStyle = { border: "1px solid #747474", p: 1, pl: 2, borderRadius: "30px", display: "flex", width: "fit-content", mb: 2}
    
    return (
        <>
            <Grid container sx={{ pb: 3, borderBottom: "1px solid #747474"}}>
                <Grid item xs={12}>
                    <Typography variant="h5">Account</Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box sx={boxStyle}>
                        <Avatar sx={{ height: '150px', width: '150px', mb: 2 }} />
                        <Button variant="contained">Logout</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box sx={inputBoxStyle}>
                        <input
                            type="text"
                            style={inputStyle}
                            className='account-field'
                            value={name}
                            disabled={disabled[0]}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Button variant="contained" sx={editButtonStyle} onClick={() => handleClick(0)}>
                            {disabled[0] ? <EditIcon /> : <DoneIcon />}
                        </Button>
                    </Box>
                    <Box sx={inputBoxStyle}>
                        <input
                            type="email"
                            style={inputStyle}
                            className='account-field'
                            value={email}
                            disabled={disabled[1]}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button variant="contained" sx={editButtonStyle} onClick={() => handleClick(1)}>
                            {disabled[1] ? <EditIcon /> : <DoneIcon />}
                        </Button>
                    </Box>
                    <Box sx={inputBoxStyle}>
                        <input
                            type="number"
                            style={inputStyle}
                            className='account-field'
                            value={phone}
                            disabled={disabled[2]}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Button variant="contained" sx={editButtonStyle} onClick={() => handleClick(2)}>
                            {disabled[2] ? <EditIcon /> : <DoneIcon />}
                        </Button>
                    </Box>
                    <Box sx={inputBoxStyle}>
                        <input
                            type="password"
                            style={inputStyle}
                            className='account-field'
                            value={password}
                            disabled={disabled[3]}
                            onChange={(e) => setPassword(e.target.value)}
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