import * as React from 'react'
import { Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import OrderButton from './order/OrderButton'
import { useSelector, useDispatch } from 'react-redux'
import {
    selectMenuList,
    selectStatus,
    fetchMenu
} from './menuSlice'
import {
    setTableId,
    selectTableId,
    selectOrderList,
} from './order/orderSlice'

import FoodItemCard from './FoodItemCard'

export default function Menu() {
    let { id } = useParams()

    const dispatch = useDispatch()

    const status = useSelector(selectStatus)
    const menuList = useSelector(selectMenuList)

    const tableId = useSelector(selectTableId)
    const orderList = useSelector(selectOrderList)

    useEffect(() => {
        if (status === 'idel') dispatch(fetchMenu())
    }, [status])

    useEffect(() => {
        if (id !== tableId) dispatch(setTableId(id))
    })

    return (
        <Fragment>
            {status === 'succeeded' ? (
                <Fragment>
                    <Box sx={{ pb: 15 }}>
                        {menuList.map((category) => (
                            <FoodItemCard category={category} />
                        ))}
                    </Box>
                    {orderList.length !== 0 ? <OrderButton /> : null}
                </Fragment>
            ) : null}
        </Fragment >
    )
}
