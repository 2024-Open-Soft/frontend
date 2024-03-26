import { Grid } from "@mui/material";
import React from "react";
import SubscriptionPlan from "../components/SubscriptionPlan";
import SubscriptionForm from "../components/SubscriptionForm";

const SubscriptionPage = () => {
  const [plans, setPlans] = React.useState([
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
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

  const [selectedPlan, setSelectedPlan] = React.useState(null);

  const handlePlanChange = (selectedPlan) => {
    setSelectedPlan(selectedPlan);
  }

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
          md: "15vh",
        },
      }}
    >
      {selectedPlan===null && plans?.map((plan, index) => (
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
          <SubscriptionPlan key={index} planDetails={plan} handlePlanChange={handlePlanChange} />
        </Grid>
      ))}
      {selectedPlan && (
        <Grid
          item
          xs={12}
        >
          <SubscriptionForm planDetails={selectedPlan} />
        </Grid>
      )}
    </Grid>
  );
};

export default SubscriptionPage;
