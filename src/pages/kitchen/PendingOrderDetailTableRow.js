import { Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useDispatch } from 'react-redux';
import { markCompleted } from './pendingOrdersSlice';


const subItem = (val, idx) => (
    <ListItem key={idx} sx={{ pr: 0 }}>
        <ListItemText
            primary={val}
            align="right"
            primaryTypographyProps={{ variant: 'subtitle2' }}
        />
    </ListItem>
)


export default function PendingOrderDetailTableRow({ order }) {
    const dispatch = useDispatch();

    const orderId = order.id;

    const handleClick = async () => {
        try {
            await dispatch(markCompleted({ orderId })).unwrap()
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
                    {order.items.map((item, idx) => (
                        subItem(item.itemInfo.name, idx)
                    ))}
                </List>
            </TableCell>
            <TableCell align="right">
                <List>
                    {order.items.map((item, idx) => (
                        subItem(item.quantity, idx)
                    ))}
                </List>
            </TableCell>
            <TableCell align="right">
                <Button
                    variant='outlined'
                    onClick={() => handleClick()}
                >
                    Delivered
                </Button>
            </TableCell>
        </TableRow>
    )
}