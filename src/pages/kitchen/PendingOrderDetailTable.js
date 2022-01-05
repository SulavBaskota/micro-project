import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PendingOrderDetailTableRow from './PendingOrderDetailTableRow';
import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function PendingOrderDetailTable({ orderList }) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell align="right">Table Number</TableCell>
            <TableCell align="right">Items</TableCell>
            <TableCell align="right">Quantities</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.map((order) => (
            <Fragment key={uuidv4()}>
              <PendingOrderDetailTableRow order={order} />
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
