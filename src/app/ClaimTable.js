import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const ClaimTable = ({ claimData }) => {
  return (
    claimData && (
      <TableContainer component={Paper}>
        <Typography variant="h6" sx={{ padding: 2 }}>
          Claim Summary
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Claimed Amount</TableCell>
              <TableCell>Disallowed Amount</TableCell>
              <TableCell>Payable Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {claimData.claimBreakdown.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.claimed}</TableCell>
                <TableCell>
                  {item.disallowed !== null ? item.disallowed : "-"}
                </TableCell>
                <TableCell>{item.payable}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <strong>Total</strong>
              </TableCell>
              <TableCell>
                <strong>{claimData.totalClaimedAmount}</strong>
              </TableCell>
              <TableCell>
                <strong>{claimData.totalDisallowedAmount}</strong>
              </TableCell>
              <TableCell>
                <strong>{claimData.totalPayableAmount}</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default ClaimTable;
