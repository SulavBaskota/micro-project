import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectPendingOrders,
    selectPendingOrdersStatus,
    fetchPendingOrders
} from './pendingOrdersSlice';
import { useInterval } from "../../utils";
import { Typography } from '@mui/material';
import PendingOrderDetailTable from "./PendingOrderDetailTable";

export default function Kitchen() {

    const dispatch = useDispatch();

    const pendingOrdersStatus = useSelector(selectPendingOrdersStatus);
    const pendingOrdersList = useSelector(selectPendingOrders);

    useEffect(() => {
        if (pendingOrdersStatus === 'idel') dispatch(fetchPendingOrders())
    }, [pendingOrdersStatus])

    useInterval(() => {
        if (pendingOrdersStatus === 'succeeded') dispatch(fetchPendingOrders())
    }, 1000 * 10)

    return (
        <Fragment>
            {pendingOrdersStatus === 'succeeded' ? (
                <Fragment>
                    {pendingOrdersList.length !== 0 ? (
                        <PendingOrderDetailTable orderList={pendingOrdersList} />
                    ) : (
                        <Typography align='center' variant='h4' component='h1'>
                            No Pending Orders
                        </Typography>
                    )}
                </Fragment>
            ) : null}
        </Fragment>
    )
}