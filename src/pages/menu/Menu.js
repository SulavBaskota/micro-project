import * as React from 'react';
import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import OrderButton from './OrderButton';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectMenuList,
    selectStatus,
    fetchMenu
} from './menuSlice';
import {
    setTableId,
    addOrder,
    removeOrder,
    increment,
    decrement,
    selectTableId,
    selectOrderList,
    selectTotal,
    selectItemCount
} from './orderSlice';

export default function Menu() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const menuList = useSelector(selectMenuList);
    const tableId = useSelector(selectTableId);
    const orderList = useSelector(selectOrderList);
    const total = useSelector(selectTotal);
    const itemCount = useSelector(selectItemCount);


    useEffect(() => {
        if (status === 'idel') dispatch(fetchMenu());
    }, [status]);

    useEffect(() => {
        if (id !== tableId) dispatch(setTableId(id))
    }, [])


    const isOrderInList = (itemId) => {
        for (let i = 0; i < orderList.length; i++) {
            if (orderList[i].itemId === itemId) {
                return i
            }
        }
        return -1
    }

    const handleRemoveItem = (itemId, itemPrice) => {
        let index = isOrderInList(itemId)
        if (index >= 0) {
            if (orderList[index].quantity > 1) {
                dispatch(decrement(
                    {
                        'itemId': itemId,
                        'itemPrice': itemPrice
                    }
                ))
            } else {
                dispatch(removeOrder(
                    {
                        'itemId': itemId,
                        'itemPrice': itemPrice
                    }
                ))
            }
        }
    }

    const handleAddItem = (itemId, itemName, itemPrice) => {
        let index = isOrderInList(itemId)
        if (index >= 0) {
            dispatch(increment(
                {
                    'itemId': itemId,
                    'itemPrice': itemPrice
                }
            ))
        } else {
            dispatch(addOrder(
                {
                    'itemId': itemId,
                    'itemName': itemName,
                    'itemPrice': itemPrice
                }
            ))
        }
    }

    return (
        <Fragment>
            {console.log(orderList)}
            {status === 'succeeded' ? (
                <Fragment>
                    <Box sx={{ pb: 15 }}>
                        {menuList.map((category, idx) => (
                            <Box key={idx} sx={{ m: 2 }}>
                                <Typography component="h1" variant="h4">
                                    {category.category}
                                </Typography>
                                <Divider variant="middle" sx={{ mb: 1 }} />
                                {category.foodItems.map((item, index) => (
                                    <Card sx={{ display: 'flex', mb: 2 }} key={index}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 151 }}
                                            image={item.img}
                                            alt={item.name}
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h6">
                                                    {item.name}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="text.secondary"
                                                    component="div"
                                                >
                                                    Rs.{item.price}
                                                </Typography>
                                            </CardContent>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    pl: 1,
                                                    pb: 1
                                                }}
                                            >
                                                <IconButton
                                                    aria-label="remove"
                                                    color="error"
                                                    onClick={() => handleRemoveItem(item.id, item.price)}
                                                >
                                                    <RemoveIcon />
                                                </IconButton>
                                                <Paper elevation={0} variant="outlined" sx={{ width: 40 }}>
                                                    <Typography component="div" variant="h5" align="center">
                                                        {orderList && (isOrderInList(item.id) >= 0) ? orderList[isOrderInList(item.id)].quantity : 0}
                                                    </Typography>
                                                </Paper>
                                                <IconButton
                                                    aria-label="add"
                                                    color="success"
                                                    onClick={() => handleAddItem(item.id, item.name, item.price)}
                                                >
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </Card>
                                ))}
                            </Box>
                        ))}
                    </Box>
                    {orderList.length !== 0 ?
                        (
                            <OrderButton
                                tableId={tableId}
                                order={orderList}
                                itemCount={itemCount}
                                total={total}
                            />
                        ) : null
                    }
                </Fragment>
            ) : null}
        </Fragment >
    );
}
