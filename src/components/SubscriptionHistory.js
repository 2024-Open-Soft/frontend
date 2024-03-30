import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";

const SubscriptionHistory = () => {
  const subscriptions = useSelector((state) => state?.user?.data?.subscriptions);

  const getStartDate = (subscription) => {
    const date = new Date(subscription.startDate);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }
  
  const getEndDate = (subscription) => {
    const date = new Date(subscription.startDate);
    date.setMonth(date.getMonth() + subscription.originalDuration);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }

  return (
    <>
      {subscriptions ? <Box sx={{ py: 2 }}>
        <Typography variant="h5" sx={{ p: 2, pl: 0 }}>
          Subscription History
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#6A6A6A" }}>
              <TableCell
                sx={{
                  border: "none",
                  color: "#FFFFFF",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              >
                Date
              </TableCell>
              <TableCell sx={{ border: "none", color: "#FFFFFF" }}>
                Plan
              </TableCell>
              <TableCell sx={{ border: "none", color: "#FFFFFF" }}>
                Amount
              </TableCell>
              <TableCell sx={{ border: "none", color: "#FFFFFF" }}>
                Start Date
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                  color: "#FFFFFF",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              >
                End Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscriptions?.map((subscription, index) => (
              <TableRow
                key={index}
                sx={{ "&:hover": { background: "#394A77" } }}
              >
                <TableCell
                  sx={{
                    border: "none",
                    color: "#FFFFFF",
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px",
                  }}
                >
                  {subscription.createdAt.slice(0, 10)}
                </TableCell>
                <TableCell sx={{ border: "none", color: "#FFFFFF" }}>
                  {subscription.title}
                </TableCell>
                <TableCell sx={{ border: "none", color: "#FFFFFF" }}>
                  {subscription.price}
                </TableCell>
                <TableCell sx={{ border: "none", color: "#FFFFFF" }}>
                  {getStartDate(subscription)}
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    color: "#FFFFFF",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  {getEndDate(subscription)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
        :
        <Typography variant="h5">Loading...</Typography>
      }
    </>
  );
};

export default SubscriptionHistory;
