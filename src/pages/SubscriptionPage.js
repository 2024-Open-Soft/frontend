import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import SubscriptionPlan from "../components/SubscriptionPlan";
import SubscriptionForm from "../components/SubscriptionForm";
import { useSelector } from "react-redux";
import { getSubscriptionPlans } from "../redux/services/Subscription";

const SubscriptionPage = () => {
  const [plans, setPlans] = React.useState([
    {
      _id: "2",
      name: "Standard",
      price: 100,
      discountPercentage: 5,
      features: [
        { description: "Max resolution - 480p" }
      ],
      status: "Buy Now",
    },

  ]);

  const [selectedPlan, setSelectedPlan] = React.useState(null);

  const subscriptions = useSelector((state) => state?.user?.subscriptions)
  console.log(subscriptions)

  const handlePlanChange = (selectedPlan) => {
    setSelectedPlan(selectedPlan);
  }

  const getData = async () => {
    const response = await getSubscriptionPlans();
    console.log("response: ", response.data)
    setPlans(response.data);
  }

  useEffect(() => {
    getData()
  }, []);

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
      {selectedPlan === null && plans?.map((plan, index) => (
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
          <SubscriptionForm plan={selectedPlan} handlePlanChange={handlePlanChange} />
        </Grid>
      )}
    </Grid>
  );
};

export default SubscriptionPage;
