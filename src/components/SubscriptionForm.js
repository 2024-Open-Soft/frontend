import { React, useState } from "react";
import {
    Grid, Typography, Box, Link, Autocomplete, TextField, Button
} from "@mui/material";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { getPaymentLink } from "../redux/services/Payment";
import { Navigate, Outlet, useLocation } from "react-router-dom";


const SubscriptionForm = ({ plan, handlePlanChange }) => {

    const [data, setData] = useState(
        {
            plan: plan.name,
            duration: 6,
            startDate: new Date()
        }
    )

    const [coupon, setCoupon] = useState("")
    const [fetching, setFetching] = useState(false)
    const [link, setLink] = useState(null)

    const handleBuyNow = async () => {
        setFetching(true)
        const response = await getPaymentLink({ planID: plan._id, duration: data.duration, startDate: data.startDate });
        // console.log(response);
        setFetching(false)
        if(response.error) return;
        setLink(response.data.link);
    }

    const handleApply = () => {
        // console.log("handle apply");
    }

    const handleChange = (name, value) => {
        setData({ ...data, [name]: value });
    }


    const token = localStorage.getItem("token")
    const location = useLocation();

    return token ? (
        <Grid
            container
            className="flex flex-col-reverse md:flex-row"
            sx={{
                margin: "auto",
                width: "80%",
                maxWidth: "900px",
                mt: 0,
                pt: 0
            }}
        >
            <Grid item xs={false} sm={false} md={5} sx={{ display: "flex" }}
            >
                <div className="w-full md:px-14 md:py-8 md:rounded-l-3xl" style={{
                    backgroundColor: "rgba(171, 171, 171, 0.2)",
                    backdropFilter: "blur(15px)"
                }}>
                    <Typography className="white text-2xl font-bold text-center md:text-start">{plan.name}</Typography>
                    <Typography className="white font-normal my-2 text-center md:text-start">
                        <span className="text-6xl font-extrabold">₹{parseInt(plan.price) * (1 - parseInt(plan.discountPercentage) * 0.01)}</span>
                        <span className="text-3xl">/mo</span>
                    </Typography>
                    <div className="p-2">
                        <ul className="list-none">
                            {plan?.features?.map((feature, index) => (
                                <div className="flex flex-row items-center" key={index}> <CheckCircleRoundedIcon /> <Typography className="m-2 ">{feature.description}</Typography> </div>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center py-4 px-4">
                        <div className="bg-gray-500 rounded-xl py-2 pr-10 pl-2 w-full" >
                            <Typography className="uppercase font-bold m-2">Total Price</Typography>
                            <Typography className="uppercase text-5xl font-bold m-4">₹{parseInt(plan.price) * (1 - parseInt(plan.discountPercentage) * 0.01) * data.duration}</Typography>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid
                item
                xs={12}
                sm={12}
                md={7}
                sx={{
                    background: "#000000b3",
                    backdropFilter: "blur(15px)",
                    p: { xs: 2, md: 4 },
                    py: { xs: 4, md: 2 },
                }}
                className="md:rounded-r-3xl"
            >
                {
                    fetching ?
                        <Box
                            component="form"
                            // noValidate
                            display="flex"
                            flexDirection={"column"}
                            // onSubmit={handleBuyNow}
                            className="px-2 flex"
                            sx={{
                                my: 1
                            }}
                        >
                            <Typography variant="h4" sx={{ color: "white" }}>Generating...</Typography>
                        </Box>
                        :
                        link ?
                            <Box
                                component="form"
                                // noValidate
                                display="flex"
                                flexDirection={"column"}
                                // onSubmit={handleBuyNow}
                                className="px-2 flex"
                                sx={{
                                    my: 1
                                }}
                            >
                                <Link href={link} sx={{ color: "white" }} target="_blank">Open the linked URL to Pay</Link>
                                <Typography sx={{ color: "white", py: 2 }}>After payment, navigate to your Account to verify payment status</Typography>
                            </Box>
                            :
                            <Box
                                component="form"
                                // noValidate
                                display="flex"
                                flexDirection={"column"}
                                // onSubmit={handleBuyNow}
                                className="px-2 flex"
                                sx={{
                                    my: 1
                                }}
                            >
                                <Typography variant="" sx={{ fontSize: "large" }}>
                                    Selected Plan
                                </Typography>
                                <TextField
                                    required
                                    value={data.plan}
                                    sx={{ mt: 1, mb: 2, mr: 2, }}
                                    disabled
                                />
                                <Typography variant="" sx={{ fontSize: "large" }}>
                                    Enter Duration (Months)
                                </Typography>
                                <TextField
                                    id="outlined-number"
                                    label=""
                                    type="number"
                                    defaultValue={6}
                                    sx={{ mt: 1, mb: 2, mr: 2, }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={data.duration}
                                    onChange={(e) => handleChange("duration", e.target.value)}
                                />

                                <Typography variant="" sx={{ fontSize: "large" }} >
                                    Start Date
                                </Typography>
                                <TextField
                                    label=""
                                    type="date"
                                    placeholder="DD/MM/YYYY"
                                    sx={{ mt: 1, mb: 2, mr: 2, }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={data.startDate}
                                    onChange={(e) => handleChange("startDate", e.target.value)}
                                />

                                {/* <Typography variant="" sx={{ fontSize: "large" }} >
                                    Discount Coupon
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", md: "row" },
                                        alignItems: "center",
                                        width: "100%",
                                        mb: 1
                                    }}
                                >
                                    <TextField
                                        sx={{
                                            mt: 1,
                                            mb: 2,
                                            mr: 2,
                                            gap: "10px",
                                            borderRadius: "10rem",
                                            height: "auto",
                                        }}
                                        value={coupon}
                                        onChange={(e) => setCoupon(e.target.value)}
                                    />
                                    <Button
                                        sx={{
                                            width: "fit-content",
                                            px: 6,
                                        }}
                                        size="large"
                                        color="success"
                                        variant="contained"
                                        onClick={handleApply}
                                        className="bg-green-500"
                                    >
                                        Apply
                                    </Button>
                                </Box> */}

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", md: "row" },
                                        alignItems: "center",
                                        width: "100%",
                                    }}
                                >
                                    <Button
                                        sx={{
                                            px: 6,
                                            width: "fit-content",
                                            mt: 1
                                        }}
                                        size="large"
                                        color="success"
                                        variant="contained"
                                        onClick={handleBuyNow}
                                    >
                                        Pay Now
                                    </Button>
                                    <Button
                                        sx={{
                                            px: 6,
                                            width: "fit-content",
                                            backgroundColor: "#487dc8",
                                            mt: 1,
                                            ml: 1
                                        }}
                                        size="large"
                                        variant="contained"
                                        onClick={() => handlePlanChange(null)}
                                    >
                                        Back
                                    </Button>
                                </Box>
                                <Typography
                                    align="left"
                                    sx={{ mt: 2, fontStyle: "italic", opacity: "80%" }}
                                >
                                    {"Having trouble in payment? "}
                                    <Link href="#" variant="body1">
                                        {"Get Help"}
                                    </Link>
                                </Typography>
                            </Box>
                }
            </Grid>
        </Grid>
    )
        :
        (
            <Navigate to={"/login"} state={{ from: location }} replace />
        )
};

export default SubscriptionForm;