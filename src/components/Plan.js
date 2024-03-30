import { Grid, Typography, Button, Box, Card, CardContent } from '@mui/material';
import React from 'react';
import "../components/style.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Plan = () => {
    const activeSubscription = useSelector((state) => state?.user?.data?.activeSubscription)

    const handleClick = (index) => {
    }

    const linkStyle = { textDecoration: "none", color: "#3D548E" }

    return (
        <>
            <Grid container sx={{ py: 3, borderBottom: "1px solid #747474" }} spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h5">Plan</Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    {activeSubscription ? <Card sx={{ background: "#3D548E", color: "#FFFFFF" }}>
                        <CardContent>
                            <Typography>{activeSubscription.name}</Typography>
                            <Box sx={{ py: 2 }}>
                                <span style={{ fontSize: "2.5rem" }}>${activeSubscription.price}</span>
                                <span>/month</span>
                            </Box>
                            <Typography sx={{ fontSize: "0.8rem" }}><i>Valid Till - {activeSubscription.endDate.slice(0, 10)}</i></Typography>
                        </CardContent>
                    </Card>
                        :
                        <Typography sx={{color: "grey"}}>No Active Subscription</Typography>
                    }
                </Grid>
                <Grid item xs={12} md={7}>
                    <Grid container spacing={2} sx={{ pl: 4 }}>
                        <Grid item xs={12} sm={6} md={12}>
                            <Link to="/subscriptions">
                                <Button variant="contained" sx={{ background: "#3D548E", color: "#FFFFFF" }}>UPGRADE PLAN</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} md={12}>
                            {activeSubscription && <Button variant="contained" sx={{ background: "#B23737", color: "#FFFFFF" }}>CANCEL PLAN</Button>}
                        </Grid>
                        <Grid item xs={12} sx={{ pt: 2 }}>
                            <Typography><Link to="/subscriptions" sx={linkStyle}>Click Here,</Link> to know more about plans</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

export default Plan;