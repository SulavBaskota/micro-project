import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Just Eat Cafe
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" component={Link} to="kitchen/" color="success">
                            Kitchen
                        </Button>
                        <Button variant="contained" component={Link} to="counter/" color="success">
                            Counter
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
