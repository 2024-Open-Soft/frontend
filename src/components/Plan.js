import { Grid, Typography, Button, Box, Card, CardContent, Link } from '@mui/material';
import React, { useState } from 'react';
import "../components/style.css"

const Plan = () => {

    const [plan, setPlan] = useState({
        type: 'STANDARD',
        rate: "3",
        endDate: "10/5/2024"
    })

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
                    <Card sx={{ background: "#3D548E", color: "#FFFFFF" }}>
                        <CardContent>
                            <Typography>{plan.type}</Typography>
                            <Box sx={{ py: 2 }}>
                                <span style={{ fontSize: "2.5rem" }}>${plan.rate}</span>
                                <span>/month</span>
                            </Box>
                            <Typography sx={{ fontSize: "0.8rem" }}><i>Valid Till - {plan.endDate}</i></Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Grid container spacing={2} sx={{ pl: 4 }}>
                        <Grid item xs={12} sm={6} md={12}>
                            <Button variant="contained" sx={{ background: "#3D548E", color: "#FFFFFF" }}>UPGRADE PLAN</Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={12}>
                            <Button variant="contained" sx={{ background: "#B23737", color: "#FFFFFF" }}>CANCEL PLAN</Button>
                        </Grid>
                        <Grid item xs={12} sx={{ pt: 2 }}>
                            <Typography><Link href="/subscriptions" sx={linkStyle}>Click Here,</Link> to know more about plans</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

export default Plan;