import React from 'react'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Autocomplete, Divider, Link } from '@mui/material';
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./utility/RequireAuth";


const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000b3',
            paper: '#000000b3',
        },
        text: {
            primary: '#ffffffb3',
            secondary: '#ccccccb3',
        },
    },

    components: {
        MuiTextField: {
            my: {
                xs: 4,
                sm: 6,
                md: 8
            },
            mx: {
                xs: 0,
                sm: 2,
                md: 3
            },
            p: 2,
            m: 2
        },
        MuiGrid: {
            m: 1,
            p: 2,
            borderRadius: '16px',
            border: '1px solid gray'

        },
        Box: {
            border: '1px solid red'
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "1000px",
                }
            }
        },
        typography: {
            fontFamily: 'Arial'
        },
    }
});

const countryCode = [
    { label: '+1' },
    { label: '+91' }
]

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function createData(date, amount, action) {
    return { date, amount, action };
}


const rows = [
    createData('10, June, 2023', 'INR 149', 'Download Invoice'),
    createData('10, June, 2023', 'INR 149', 'Download Invoice'),
    createData('10, June, 2023', 'INR 149', 'Download Invoice'),
    createData('10, June, 2023', 'INR 149', 'Download Invoice'),
    createData('10, June, 2023', 'INR 149', 'Download Invoice'),
];

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <p>STANDARD</p>
            </Typography>
            <Typography variant="h5" component="div" className='mb-5'>
                <b>$3 / month</b>
            </Typography>

            <Typography variant="caption">
                <i>Vaild Till - 10/12/2024</i>
            </Typography>
        </CardContent>
    </React.Fragment>
);

export default function UserInfo() {
    return (
        <div className='flex flex-col items-center justify-center overflow-auto pt-96  py-5' style={{ backgroundImage: 'url(\'wallpaperflare.com_wallpaper.jpg\')', height: '100vh', backgroundSize: 'cover' }}>
            <ThemeProvider theme={theme}>
            <Box className='bg-black bg-opacity-80 ' sx={{ p: 2, m: 5, border: '2px white', borderRadius: '16px' }} >
                <Typography sx={{
                        // margin: 0,
                        color: 'white',
                        border: '2px white',
                        textAlign: 'left'
                    }}>
                        Account
                    </Typography>

                {/* form */}

                <Grid container direction="row" sx={{
                        // width: '100vw'
                        justifyContent: 'center',
                        // gap: '0'
                    }}>
                        <Grid item sx={{
                            p: 2,
                            margin: 1,
                            alignSelf: 'center'
                        }}>
                            <Grid container direction="column" sx={{
                                alignItems: 'center',

                            }}  >
                                <Grid item>
                        <Avatar className='m-5'
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 90, height: 90 }}
                        />
</Grid>
                                <Grid item>
                        <Button className='m-5 bg-red-500 text-white rounded-full' variant="outlined" endIcon={<EditIcon />}>LOG OUT</Button>
                    </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container item spacing={2} direction='column' sx={{
                                alignItems: 'center',
                                width: '30vw',
                                p: 5
                            }}>
                                <Grid item sx={{ width: '100%' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                        <TextField variant="outlined" fullWidth required />
                            <EditIcon color="action" />
                        </Box>
                                </Grid>
                                <Grid item sx={{ width: '100%' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                            <TextField variant="outlined" fullWidth required />
                            <EditIcon color="action" />
                        </Box>
                                </Grid>
                        <Grid item sx={{ width: '100%' }}>
                            <Grid container direction='row' sx={{ width: '100%' }}>
                                        <Grid item >
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={countryCode}
                                                sx={{ width: 50 }}
                                                renderInput={(params) => <TextField {...params} fullWidth InputProps={{
                                                    style: {
                                                        borderTopRightRadius: '0',
                                                        borderBottomRightRadius: '0'
                                                    }
                                                }} />}
                                            />
                                        </Grid>

                                        <Grid item sx={{}}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                                <TextField variant="outlined" fullwidth InputProps={{
                                                    style: {
                                                        borderTopLeftRadius: '0',
                                                        borderBottomLeftRadius: '0'
                                                    }
                                                }} />
                            <EditIcon color="action" />
                        </Box>
                                        </Grid>

                                    </Grid>
                        </Grid>
                                <Grid item sx={{ width: '100%' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                        <TextField variant="outlined" type='password' fullWidth required />
                                        <EditIcon color="action" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl> */}


                    {/* <Divider orientation="vertical" flexItem /> */}

                <hr className='bg-black m-0 p-0' />

                    <Grid container direction="column" >

                    <p className='m-5 text-white '>Plan</p>

                        <Grid container item direction="row" justifyContent='center'>
                            <Grid item>
                                <Box sx={{ minWidth: 315 }}>
                            <Card variant="outlined" className='bg-blue-600 bg- text-white'>{card}</Card>
                        </Box>
</Grid>
                            <Grid item>
                                <Grid container item direction="column" alignItems='left' sx={{ px: 2, width: '100%' }}>
                                    <Grid item>
                                        <Button className='m-2 bg-green-500 text-white rounded-full' variant="outlined" sx={{ width: '70%' }}>UPGRADE PLAN</Button>
                            </Grid>
                                    <Grid item>
                                        <Button className='m-2 bg-red-500 text-white rounded-full' variant="outlined" sx={{ width: '70%' }}>CANCEL PLAN</Button>
</Grid>
                                    <Grid item>

                            <p className='m-2 text-white'><Link href="#">Click Here</Link>, to know more about plans</p>
</Grid>
                        </Grid>
                            </Grid>
                        <p className=''></p>
                    </Grid>

                </Grid>
                    {/* <Divider orientation="vertical" flexItem /> */}
                <hr className='bg-black my-5 p-0' />

                <Grid container direction="column" >
                    <Grid item>
                            <p className='m-3 text-white '>Payment History</p>
</Grid>
                        <Grid item>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='bg-transparent'>
                            <TableHead className='bg-gray-400'>
                                <TableRow>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Amount</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{
                                                    '&:last-child td, &:last-child th': { border: 0 },
                                                    "&:hover": {
                                                        backgroundColor: 'rgb(70, 0, 200, 0.8)',
                                                        textDecoration: 'none'
                                                    }
                                                }}
                                    >
                                        <TableCell align='center' component="th" scope="row">
                                            {row.date}
                                        </TableCell>
                                        <TableCell align="center">{row.amount}</TableCell>
                                        <Link href="#" sx={{
                                                    textDecoration: 'none'
                                                }}>
                                                    <TableCell align="center" sx={{
                                                        "&:hover": {
                                                            color: 'rgb(255, 0, 0, 0.8)',
                                                            textDecoration: 'none'
                                                        }
                                                    }}>{row.action}</TableCell>
</Link>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
</Grid>

                </Grid>

            </Box>
            </ThemeProvider>

        </div >
    )
}
