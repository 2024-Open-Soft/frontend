import React from 'react'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
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
import { Autocomplete, Divider, IconButton, InputAdornment, Link, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


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
    <CardContent sx={{width: '30vw'}}>
      <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
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
  const [showPassword, setShowPassword] = React.useState(false);

  const [readOnly1, setReadOnly1] = React.useState(true); // Initial state is read-only
  const [readOnly2, setReadOnly2] = React.useState(true); // Initial state is read-only
  const [readOnly3, setReadOnly3] = React.useState(true); // Initial state is read-only
  const [readOnly4, setReadOnly4] = React.useState(true); // Initial state is read-only

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='flex flex-col items-center justify-center overflow-auto pt-96  py-5' style={{ backgroundImage: 'url(\'bg.png\')', height: '100vh', backgroundSize: 'cover' }}>
      <ThemeProvider theme={theme}>
        <Box className='bg-black bg-opacity-70 ' sx={{ p: 2, m: 5, border: '2px white', borderRadius: '16px' , maxWidth: '95vw' }} >
          <Typography sx={{
            // margin: 0,
            color: 'white',
            border: '2px white',
            textAlign: 'left'
          }}>
            Account
          </Typography>

          {/* form */}

          <Box sx={{
            justifyContent: 'center',
            display: 'flex',
            p: 3,
            flexDirection: {
              xs: 'column',
              md: 'row'
            }

            // gap: '0'
          }}>
            <Grid item sx={{
              p: 2,
              margin: 1,
              alignSelf: 'center',
              width: {
                xs: '100%',
                md: '100%'
              }
            }}>
              <Grid container direction="column" sx={{
                alignItems: 'center',

              }}  >
                <Grid item>
                  <Avatar className='m-5'
                    alt="V"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 100, height: 100 }}
                  />
                </Grid>
                <Grid item>
                  <Button className='m-5 bg-red-500 text-white rounded-full' variant="outlined">LOG OUT</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{

            }} >
              <Grid container item spacing={2} direction='column' sx={{
                alignItems: 'center',
                xs: { width: '100vw', padding:1 },
                md: { width: '30vw' , padding:5 }
              }}>
                <Grid item sx={{ width: '100%' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <OutlinedInput fullWidth id='outlined-adornment-name' name='name' type='text' required readOnly={readOnly1} endAdornment={
                      <InputAdornment position="end">
                        <EditIcon
                          edge="end"
                          color='action'
                          sx={{
                            backgroundColor: '#BFBFBF80',
                            borderRadius: '100px',
                            height: '40px',
                            width: '40px',
                            p: 1,
                            cursor: 'pointer'
                          }}
                          onClick={() => { setReadOnly1(!readOnly1); }}
                        >
                        </EditIcon>
                      </InputAdornment>
                    } />

                  </Box>
                </Grid>
                <Grid item sx={{ width: '100%' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <OutlinedInput fullWidth id='outlined-adornment-email' name='email' type='email' required readOnly={readOnly2}
                      endAdornment={
                        <InputAdornment position="end">
                          <EditIcon
                            edge="end"
                            color='action'
                            sx={{
                              backgroundColor: '#BFBFBF80',
                              borderRadius: '100px',
                              height: '40px',
                              width: '40px',
                              p: 1,
                              cursor: 'pointer'
                            }}
                            onClick={() => { setReadOnly2(!readOnly2); }}
                          >

                          </EditIcon>
                        </InputAdornment>
                      } />
                  </Box>
                </Grid>
                <Grid item sx={{ width: '100%' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <Grid item>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={countryCode}
                        sx={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} fullWidth InputProps={{
                          style: {
                            borderTopRightRadius: '0',
                            borderBottomRightRadius: '0'
                          }
                        }} />}
                      />
                    </Grid>

                    <Grid item sx={{ width: '100%' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <OutlinedInput fullwidth id='outlined-adornment-phonenumber' name='phone' type='number' pattern="[0-9]{5}-[0-9]{5}" readOnly={readOnly3} sx={{

                          borderTopLeftRadius: '0',
                          borderBottomLeftRadius: '0'

                        }} endAdornment={
                          <InputAdornment position="end">
                            <EditIcon
                              edge="end"
                              color='action'
                              sx={{
                                backgroundColor: '#BFBFBF80',
                                borderRadius: '100px',
                                height: '40px',
                                width: '40px',
                                p: 1,
                                cursor: 'pointer'
                              }}
                              onClick={() => { setReadOnly3(!readOnly3); }}

                            >
                            </EditIcon>
                          </InputAdornment>
                        } />
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item sx={{ width: '100%' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <OutlinedInput fullWidth required
                      id="outlined-adornment-password"
                      name='password'
                      type={showPassword ? 'text' : 'password'}
                      readOnly={readOnly4}
                      endAdornment={
                        <InputAdornment position="end">
                          <EditIcon
                            aria-label="toggle password visibility"
                            // onClick={handleClickShowPassword}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                            color='action'
                            sx={{
                              backgroundColor: '#BFBFBF80',
                              borderRadius: '100px',
                              height: '40px',
                              width: '40px',
                              p: 1,
                              cursor: 'pointer'
                            }}

                            onClick={() => { setReadOnly4(!readOnly4); }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </EditIcon>
                        </InputAdornment>
                      }
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <hr className='bg-black m-0 p-0' />

          <Box sx={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            p: 2,
          }}  >

            <p className='mx-5 text-white '>Plan</p>

            <Box sx={{
              justifyContent: 'center',
              display:'flex',
              p:3,
              flexDirection: {
                xs: 'column',
                md: 'row'
              }
              }}>
              
                <Box sx={{ 
                  xs: {maxWidth: '95vw'},
                  sm: {width: '70vw'},
                  md: {width: '100vw'}
                }}>
                  <Card variant="outlined" className='bg-blue-600 bg- text-white'>{card}</Card>
                </Box>
              
              <Box sx={{
                display: 'flex',
                flexDirection:'column',
                alignItems: 'left',
                px: 2, 
                width: '100%'
              }}>
                  <Grid item>
                    <Button className='m-2 bg-green-500 text-white rounded-full' variant="outlined" sx={{
                       md: {width: '70%'},
                       xs: {width:'95rem'}
                  }}>UPGRADE PLAN</Button>
                  </Grid>
                  <Grid item>
                    <Button className='m-2 bg-red-500 text-white rounded-full' variant="outlined" sx={{
                       md: {width: '70%'},
                       xs: {width:'95rem'}
                  }}>CANCEL PLAN</Button>
                  </Grid>
                  <Grid item>

                    <p className='m-2 text-white'><Link href="#">Click Here</Link>, to know more about plans</p>
                  </Grid>
                
              </Box>
              <p className=''></p>
            </Box>

          </Box>

          <hr className='bg-black my-5 p-0' />

          <Grid container direction="column" >
            <Grid item>
              <p className='m-3 text-white '>Payment History</p>
            </Grid>
            <Grid item>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" className='bg-transparent'>
                  <TableHead sx={{
                    bgcolor: 'slategray',
                    borderRadius: '16px'
                  }}>
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
