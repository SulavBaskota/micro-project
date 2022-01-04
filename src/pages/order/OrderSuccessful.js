import { Stack, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function OrderSuccessful({ tableId }) {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 15
            }}
        >
            <Stack spacing={6}>
                <Typography variant="h6" component="h4" >
                    Your Order was successfully placed!!
                </Typography>
                <Button
                    variant="outlined"
                    component={Link}
                    to={`/menu/${tableId}`}
                    sx={{ width: '50%', alignSelf: 'center' }}
                >
                    Go Back
                </Button>
            </Stack>
        </Box>
    )
}