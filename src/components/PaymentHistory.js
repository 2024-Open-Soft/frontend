import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const PaymentHistory = () => {
    const [data, setData] = useState([
        {
            id: 1,
            date: "10/5/2024",
            amount: "$3",
            status: "Paid",
        },
        {
            id: 2,
            date: "10/5/2024",
            amount: "$3",
            status: "Paid"
        },
        {
            id: 3,
            date: "10/5/2024",
            amount: "$3",
            status: "Paid"
        },
        {
            id: 4,
            date: "10/5/2024",
            amount: "$3",
            status: "Paid"
        },
        {
            id: 5,
            date: "10/5/2024",
            amount: "$3",
            status: "Paid"
        }
    ])
    return (
        <>
            <Box sx={{ py: 2 }}>
                <Typography variant="h5" sx={{ p: 2 }}>Payment History</Typography>
                <Table>
                    <TableHead>
                        <TableRow sx={{ background: "#6A6A6A" }}>
                            <TableCell sx={{ border: "none", color: "#FFFFFF", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}>Date</TableCell>
                            <TableCell sx={{ border: "none", color: "#FFFFFF" }}>Amount</TableCell>
                            <TableCell sx={{ border: "none", color: "#FFFFFF", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((payment) => (
                            <TableRow key={payment.id} sx={{ "&:hover": { background: "#394A77" } }}>
                                <TableCell sx={{ border: "none", color: "#FFFFFF", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}>{payment.date}</TableCell>
                                <TableCell sx={{ border: "none", color: "#FFFFFF" }}>{payment.amount}</TableCell>
                                <TableCell sx={{ border: "none", color: "#FFFFFF", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>{payment.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </>
    );
};

export default PaymentHistory;