import { Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useDispatch } from 'react-redux';
import { markPaid } from './unpaidOrdersSlice';
import {v4 as uuidv4} from 'uuid';
import { Fragment } from 'react';

const subItem = (val) => (
    <Fragment key={uuidv4()}>
        <ListItem sx={{ pr: 0 }} >
            <ListItemText
                primary={val}
                align="right"
                primaryTypographyProps={{ variant: 'subtitle2' }}
            />
        </ListItem>
    </Fragment>
)

export default function UnpaidOrderDetailTableRow({ order }) {
    const dispatch = useDispatch();

    const orderId = order.id;

    let total = 0;

    order.items.forEach(element => {
        total += parseFloat(element.itemInfo.price) * parseInt(element.quantity)
    });

    const handleClick = async () => {
        try {
            await dispatch(markPaid({ orderId })).unwrap()
        } catch (err) {
            console.log('Failed to mark order as completed: ', err)
        }
    }

    return (
        <TableRow
            key={order.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{order.id}</TableCell>
            <TableCell align="right">{order.tableId}</TableCell>
            <TableCell align="right">
                <List>
                    {order.items.map((item) => (
                        subItem(item.itemInfo.name)
                    ))}
                </List>
            </TableCell>
            <TableCell align="right">
                <List>
                    {order.items.map((item) => (
                        subItem(item.quantity)
                    ))}
                </List>
            </TableCell>
            <TableCell align="right">
                <List>
                    {order.items.map((item) => (
                        subItem(item.itemInfo.price)
                    ))}
                </List>
            </TableCell>
            <TableCell align="right">
                <List>
                    {order.items.map((item) => (
                        subItem(parseFloat(item.itemInfo.price) * parseInt(item.quantity))
                    ))}
                </List>
            </TableCell>
            <TableCell align="right">{total}</TableCell>
            <TableCell align="right">
                <Button
                    variant='outlined'
                    onClick={() => handleClick()}
                >
                    Paid
                </Button>
            </TableCell>
        </TableRow>
    )
}