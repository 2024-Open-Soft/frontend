import { React } from 'react'
import { Box, Button, CssBaseline, Grid, Link, Paper, TextField, Typography } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000',
            paper: '#000',
        },
        text: {
            primary: '#ffffffb3',
            secondary: '#ccccccb3',
        },
    },
    typography: {
        fontFamily: 'Arial'
    },
    components: {
        MuiGrid: {
            styleOverrides: {
                root: {
                    backgroundImage: 'unset',
                    padding: '0 2rem'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "15px"
                },
                input: {
                    backgroundColor: "#FFFFFF00",
                    color: "#ffffffb3",
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 1) inset',
                        WebkitTextFillColor: "#ffffffb3"
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#e60000',
                    borderRadius: '20px',
                    color: '#e6e6e6',
                    "&:hover": {
                        backgroundColor: "#ff0000",
                        color: 'white'
                    },
                }
            }
        }
    }
});

const SignUp = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <section className='flex flex-col items-center justify-center' style={{
            backgroundImage: 'url(\'/background-img.jpg\')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '5vh 5vw'
        }}>
            <div style={{
                maxWidth: '70rem',
                // borderRadius: '50px'
            }}>
                <ThemeProvider theme={theme} >
                    <Grid container component="main" sx={{ /*borderRadius: '100px'*/ }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={false}
                            md={5}
                            sx={{
                                backgroundImage: 'url(/movies.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '50px 0 0 50px'
                            }}
                        />
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={7}
                            component={Paper}
                            elevation={6}
                            square
                            sx={{
                                borderRadius: {
                                    xs: '50px',
                                    md: '0 50px 50px 0',
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign up
                                </Typography> */}
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <Typography variant="" sx={{ fontSize: 'large' }}>Enter Name</Typography>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        // label="Enter name"
                                        name="name"
                                        autoComplete="name"
                                        autoFocus
                                        sx={{ mt: 1, mb: 2 }}
                                    />
                                    <Typography variant="" sx={{ fontSize: 'large' }}>Enter Email</Typography>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        // label="Enter email"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        sx={{ mt: 1, mb: 2 }}
                                    />
                                    <Typography variant="" sx={{ fontSize: 'large' }}>Enter Password</Typography>
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
                                    />
                                    <Button
                                        type="submit"
                                        // fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Create Account
                                    </Button>
                                    <Typography align='right'>
                                        <Link href="#" variant="body2">
                                            {"Already have an account? Sign In"}
                                        </Link>
                                    </Typography>
                                    <Typography align='center' sx={{ mt: 2 }}>
                                        {"Having trouble logging in? "}
                                        <Link href="#" variant="body1">
                                            {"Get Help"}
                                        </Link>
                                    </Typography>
                                    <Copyright sx={{ mt: 3 }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </section>
    )
}

export default SignUp
