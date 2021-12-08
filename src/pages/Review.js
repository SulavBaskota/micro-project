import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Fragment } from 'react';
import { Container, Button, Paper, Box } from '@mui/material';

const orderDetails = {
    tableId: '5',
    orders: [
        {
            itemId: '1',
            name: 'Chicken Momo',
            quantity: 3,
            price: 250,
        },
        {
            itemId: '2',
            name: 'French Fries',
            quantity: 2,
            price: 150,
        },
        {
            itemId: '3',
            name: 'Milk Tea',
            quantity: 1,
            price: 50,
        },
        {
            itemId: '4',
            name: 'Fried Rice',
            quantity: 3,
            price: 200,
        },
    ],
    total: 1700,
};

export default function Review() {
    return (
        <Fragment>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Order Details
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Table: {orderDetails.tableId}
                    </Typography>
                    <List disablePadding>
                        {orderDetails.orders.map((order) => (
                            <ListItem key={order.name} sx={{ py: 1, px: 0 }}>
                                <ListItemText primary={order.quantity + ' X ' + order.name} secondary={'Rs.' + order.price + ' each'} />
                                <Typography variant="body2">Rs.{order.price * order.quantity}</Typography>
                            </ListItem>
                        ))}

                        <ListItem sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="Total" />
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                Rs.{orderDetails.total}
                            </Typography>
                        </ListItem>
                    </List>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                        <Button sx={{ mt: 3, ml: 1 }}>
                            Cancel Order
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ mt: 3, ml: 1 }}
                        >
                            Confirm
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Fragment>
    );
}