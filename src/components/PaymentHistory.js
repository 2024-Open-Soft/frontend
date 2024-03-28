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

const PaymentHistory = () => {
  const payments = useSelector((state) => state?.user?.data?.payments);


  return (
    <>
      {payments ? <Box sx={{ py: 2 }}>
        <Typography variant="h5" sx={{ p: 2, pl: 0 }}>
          Payment History
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
              <TableCell
                sx={{
                  border: "none",
                  color: "#FFFFFF",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments?.map((payment, index) => (
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
                  {payment.createdAt.slice(0, 10)}
                </TableCell>
                <TableCell sx={{ border: "none", color: "#FFFFFF" }}>
                  {payment.title}
                </TableCell>
                <TableCell sx={{ border: "none", color: "#FFFFFF" }}>
                  {payment.amount}
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    color: "#FFFFFF",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  {payment.status}
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

export default PaymentHistory;
