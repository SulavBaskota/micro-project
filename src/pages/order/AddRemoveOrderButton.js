import { Fragment } from "react"
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Paper from '@mui/material/Paper'
import { useSelector, useDispatch } from 'react-redux'
import { selectOrderList } from "./orderSlice"
import {
    isOrderInList,
    indexOf,
    handleRemoveItem,
    handleAddItem
} from './orderHandler'

export default function AddRemoveOrderButton({ item }) {

    const dispatch = useDispatch()
    const orderList = useSelector(selectOrderList)

    return (
        <Fragment>
            <IconButton
                aria-label="remove"
                color="secondary"
                onClick={() => handleRemoveItem(item.id, item.price, orderList, dispatch)}
            >
                <RemoveIcon />
            </IconButton>
            <Paper elevation={0} variant="outlined" sx={{ width: 40 }}>
                <Typography component="div" variant="h5" align="center">
                    {orderList && isOrderInList(item.id, orderList) ?
                        orderList[indexOf(item.id, orderList)].quantity : 0}
                </Typography>
            </Paper>
            <IconButton
                aria-label="add"
                color="primary"
                onClick={() => handleAddItem(item.id, item.name, item.price, orderList, dispatch)}
            >
                <AddIcon />
            </IconButton>
        </Fragment>
    )
}