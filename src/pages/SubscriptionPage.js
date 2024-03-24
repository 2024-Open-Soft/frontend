import { Grid } from "@mui/material";
import React from "react";
import SubscriptionPlan from "../components/SubscriptionPlan";

const SubscriptionPage = () => {
  const [plans, setPlans] = React.useState([
    {
      name: "Basic",
      originalPrice: 8,
      finalPrice: 5,
      features: [
        "Max resolution - 480p",
        "Availabe on 3 devices",
        "Video and sound quality",
      ],
      status: "Already Using",
    },
    {
      name: "Standard",
      originalPrice: 8,
      finalPrice: 5,
      features: [
        "Max resolution - 480p",
        "Availabe on 3 devices",
        "Video and sound quality",
      ],
      status: "Buy Now",
    },
    {
      name: "Premium",
      originalPrice: 8,
      finalPrice: 5,
      features: [
        "Max resolution - 480p",
        "Availabe on 3 devices",
        "Video and sound quality",
      ],
      status: "Buy Now",
    },
    {
      name: "Platinum",
      originalPrice: 8,
      finalPrice: 5,
      features: [
        "Max resolution - 480p",
        "Availabe on 3 devices",
        "Video and sound quality",
      ],
      status: "Buy Now",
    },
  ]);
  return (
    <Grid
      container
      sx={{
        pl: {
          xs: "2vw",
          md: "10vw",
        },
        pt: {
          xs: "5vh",
          md: "18vh",
        },
      }}
    >
      {plans?.map((plan, index) => (
        <Grid
          item
          key={index}
          sx={{
            justifyContent: "center",
            display: "flex",
            mb: { xs: "5vh", md: "10vh" },
          }}
          xs={12}
          sm={6}
          md={6}
          lg={3}
        >
          <SubscriptionPlan key={index} planDetails={plan} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SubscriptionPage;
