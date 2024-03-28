import { Grid, Typography, Button, Box, Card, CardContent, Link } from '@mui/material';
import React, { useState, useEffect } from 'react';
import "../components/style.css"
import { getActiveSubscriptionPlan } from '../redux/services/Subscription';
// import { login } from '../redux/services/Login'; // Import login function
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../redux/services/User';

const Plan = () => {
    const [plan, setPlan] = useState(null); // Initialize plan state as null
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchActivePlan = async () => {
            try {
               
                const response = await fetchUserData(dispatch); 
                console.log(response.data.data.user._id);
                const userId = response.data.data.user._id; // Extract user ID from login response
                // Fetch active subscription plan data from backend using user ID
                const data = await getActiveSubscriptionPlan(userId);
                console.log(data);
                setPlan(data);
            } catch (error) {
                console.error('Error fetching active subscription plan:', error);
            }
        };

        fetchActivePlan();
    }, []); // Empty dependency array ensures useEffect runs only once when component mounts

    const handleClick = (index) => {
        // Handle click event if needed
    };

    const linkStyle = { textDecoration: "none", color: "#3D548E" };

    return (
        <>
            <Grid container sx={{ py: 3, borderBottom: "1px solid #747474" }} spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h5">Plan</Typography>
                </Grid>
                {plan && // Render only if plan data is available
                    <Grid item xs={12} md={5}>
                        <Card sx={{ background: "#3D548E", color: "#FFFFFF" }}>
                            <CardContent>
                                <Typography>{plan.data.plan.name}</Typography>
                                <Box sx={{ py: 2 }}>
                                    <span style={{ fontSize: "2.5rem" }}>${plan.data.plan.price}</span>
                                    <span>/month</span>
                                </Box>
                                <Typography sx={{ fontSize: "0.8rem" }}><i>Valid Till - {new Date(plan.data.endDate).toISOString().split('T')[0]}</i></Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                }
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
