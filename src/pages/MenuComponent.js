import * as React from 'react';
import { Fragment, useState } from 'react';
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
import { MenuList } from './MenuItems';
import CheckoutButton from './CheckoutButtonComponent';

export default function Menu() {
    let { id } = useParams();
    const [order, setOrder] = useState({});
    const [items, setItems] = useState(0);
    const [total, setTotal] = useState(0);

    const handleAddItem = (itemId, itemPrice) => {
        if (itemId in order) {
            setOrder({
                ...order,
                [itemId]: order[itemId] + 1,
            });
        } else {
            setOrder({
                ...order,
                [itemId]: 1,
            });
        }
        setItems(items + 1);
        setTotal(total + itemPrice);
    }

    const handleRemoveItem = (itemId, itemPrice) => {
        if (itemId in order) {
            if (order[itemId] > 1) {
                setOrder({
                    ...order,
                    [itemId]: order[itemId] - 1,
                })
            } else {
                let newOrder = { ...order };
                delete newOrder[itemId];
                setOrder(newOrder);
            }
            setItems(items - 1);
            setTotal(total - itemPrice);
        }
    }

    return (
        <Fragment>
            {console.log(order)}
            <Box sx={{ pb: 15 }}>
                {MenuList.map((category, idx) => (
                    <Box key={idx} sx={{ m: 2 }}>
                        <Typography component="h1" variant="h4">
                            {category.category}
                        </Typography>
                        <Divider variant="middle" sx={{ mb: 1 }} />
                        {category.items.map((item, index) => (
                            <Card sx={{ display: 'flex', mb: 2 }} key={index}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    image={item.img}
                                    alt={item.img_alt}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h6">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            ${item.price}
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <IconButton aria-label="remove" color="error" onClick={() => handleRemoveItem(item.id, item.price)}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <Paper elevation={0} variant="outlined" sx={{ width: 40 }}>
                                            <Typography component="div" variant="h5" align="center">
                                                {order && (item.id in order) ? order[item.id] : 0}
                                            </Typography>
                                        </Paper>
                                        <IconButton aria-label="add" color="success" onClick={() => handleAddItem(item.id, item.price)}>
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Card>
                        ))}
                    </Box>
                ))}
            </Box>
            {Object.keys(order).length !== 0 ?
                (
                    <CheckoutButton items={items} total={total} />
                ) : null
            }
        </Fragment >
    );
}
