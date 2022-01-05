import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectPendingOrders,
    selectPendingOrdersStatus,
    fetchPendingOrders
} from './pendingOrdersSlice';
import { useInterval } from "../../utils";
import { Typography, Box } from '@mui/material';
import PendingOrderDetailTable from "./PendingOrderDetailTable";

export default function Kitchen() {

    const dispatch = useDispatch();

    const pendingOrdersStatus = useSelector(selectPendingOrdersStatus);
    const pendingOrdersList = useSelector(selectPendingOrders);

    useEffect(() => {
        if (pendingOrdersStatus === 'idel') dispatch(fetchPendingOrders())
    }, [pendingOrdersStatus, dispatch])

    useInterval(() => {
        if (pendingOrdersStatus === 'succeeded') dispatch(fetchPendingOrders())
    }, 1000 * 120)

    return (
        <Fragment>
            {pendingOrdersStatus === 'succeeded' ? (
                <Fragment>
                    {pendingOrdersList.length !== 0 ? (
                        <PendingOrderDetailTable orderList={pendingOrdersList} />
                    ) : (
                        <Box sx={{ pt: 10, justifyContent: 'center', display: 'flex' }}>
                            <Typography align='center' variant='h4' component='h1'>
                                No Pending Orders
                            </Typography>
                        </Box>
                    )}
                </Fragment>
            ) : null}
        </Fragment>
    )
}