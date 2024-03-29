import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubscriptionPlan from "../components/SubscriptionPlan";
import SubscriptionForm from "../components/SubscriptionForm";
import { useSelector } from "react-redux";
import { getSubscriptionPlans } from "../redux/services/Subscription";

const SubscriptionPage = () => {
  const [plans, setPlans] = useState(null);

  const [selectedPlan, setSelectedPlan] = useState(null);

  const subscriptions = useSelector((state) => state?.user?.subscriptions)


  const handlePlanChange = (selectedPlan) => {
    setSelectedPlan(selectedPlan);
  }

  const getData = async () => {
    try {
      const response = await getSubscriptionPlans();
      // console.log("response: ", response.data)
      setPlans(response.data);
    }
    catch (error) {
      console.error(error)
    }
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
      {selectedPlan ?

        <Grid
          item
          xs={12}
        >
          <SubscriptionForm plan={selectedPlan} handlePlanChange={handlePlanChange} />
        </Grid>
        :
        plans ? plans?.map((plan, index) => (
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
        ))
          :
          <Typography variant="h4">Loading...</Typography>
      }
    </Grid>
  );
};

export default SubscriptionPage;
