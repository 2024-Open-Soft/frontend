import React from 'react'
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

function createData(date, amount, action) {
    return { date, amount, action };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
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
        <div className='flex flex-col items-center justify-center overflow-auto pt-64 py-5' style={{ backgroundImage: 'url(\'wallpaperflare.com_wallpaper.jpg\')', height: '100vh', backgroundSize: 'cover' }}>
            <p className='text-slate-100'>UserInfo</p>
            <div className='bg-gray-50'>
                <p className='bg-neutral-100'>Account</p>

                {/* form */}

                <Stack direction="row">

                    <Stack direction="column">
                        <Avatar className='m-5'
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 90, height: 90 }}
                        />
                        <Button className='m-5 bg-red-500 text-white rounded-full' variant="outlined" endIcon={<EditIcon />}>LOG OUT</Button>
                    </Stack>

                    <Stack spacing={2} >

                        <div>
                            <TextField className='rounded-full' label="Name" variant="filled" required />
                            <EditIcon />
                        </div>
                        <div>
                            <TextField label="Email" variant="filled" required />
                            <EditIcon />
                        </div>
                        <div>
                            <TextField label="Phone Number" variant="filled" endIcon={<EditIcon />} />
                            <EditIcon />
                        </div>
                        <div>
                            <TextField label="Password" variant="filled" required />
                            <EditIcon />
                        </div>

                    </Stack>
                </Stack>

                <hr className='bg-black m-5 p-0' />

                <Stack direction="column" >

                    <p className='m-5'>Plan</p>

                    <Stack direction="row">

                        <Box sx={{ minWidth: 275 }}>
                            <Card variant="outlined" className='bg-blue-600 bg- text-white'>{card}</Card>
                        </Box>

                        <Stack direction="column">

                            <Button className='m-2 bg-green-500 text-white rounded-full' variant="outlined" >UPGRADE PLAN</Button>
                            <Button className='m-2 bg-red-500 text-white rounded-full' variant="outlined" >CANCEL PLAN</Button>

                            <p className='m-2'>Click Here, to know more about plans</p>

                        </Stack>
                        <p className=''></p>
                    </Stack>

                </Stack>
                <hr className='bg-black m-5 p-0' />

                <Stack direction="column" >
                    <p className='m-3 text-white'>Payment History</p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='bg-transparent'>
                            <TableHead className='bg-gray-400'>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell align="right">Amount</TableCell>
                                    <TableCell align="right">Action&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.amount}</TableCell>
                                        <TableCell align="right">{row.action}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Stack>

            </div>

        </div>
    )
}
