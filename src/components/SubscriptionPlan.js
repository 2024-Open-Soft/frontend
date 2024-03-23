import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@mui/material/Button";

function SubscriptionPlan({ planDetails }) {
  return (
    <div
      className="w-72 h-100 px-4 py-8 text-[#fff] bg-[rgba(0,0,0,0.7)] rounded-[2rem]"
      style={{ fontFamily: "arial", backdropFilter: "blur(15px)" }}
    >
      <h3 className="m-0 text-[1.5rem] capitalize">{planDetails.name}</h3>
      <span className="text-[1.5rem]">
        <b className="text-[3rem]">${planDetails.originalPrice}</b>/mo
      </span>
      <div className="my-4">
        {planDetails.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircleIcon className="inline-block" />
            <p className="inline-block my-2">{feature}</p>
          </div>
        ))}
      </div>
      <div className=" p-4 2-[90%] flex items-center flex-col bg-[#222] rounded-[1rem]">
        <h4 className="m-0 uppercase">Yearly Discount!</h4>
        <span className="relative text-[#7D7D7D] my-2 after:content-[''] after:block after:absolute after:top-[40%] after:left-[-20%] after:w-[140%] after:h-[2px] after:bg-[red] after:text-[red]">
          <b className="text-[2rem]">${planDetails.originalPrice}</b>/mo
        </span>
        <span className="text-[1.5rem]">
          <strong className="text-[3rem]">${planDetails.finalPrice}</strong>/mo
        </span>
      </div>
      <Button
        sx={{
          backgroundColor:
            planDetails.status === "Already Using" ? "#e60000" : "skyblue",
        }}
        className="mt-4 m-auto py-2 block w-52 rounded-[2rem]"
        variant="contained"
      >
        {planDetails.status}
      </Button>
    </div>
  );
}

export default SubscriptionPlan;
