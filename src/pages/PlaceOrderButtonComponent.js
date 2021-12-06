import * as React from 'react';
import { Box, Button } from '@mui/material';
import { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function PlaceOrderButton({ items, total }) {
    return (
        <Fragment>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 0,
                    m: 0
                }}
            >
                <Box
                    sx={{
                        boxShadow: 8,
                        width: '100%',
                        height: 100,
                        // borderRadius: 1.5,
                        position: 'Fixed',
                        bottom: 0,
                        // m: 0.5,
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        color="success"
                        sx={{
                            ml: 1,
                            mt: 1,
                            mr: 1,
                            width: '98%',
                            height: 50,
                            textTransform: 'none'
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Typography variant="body1" component="div" align="left">
                                    {items}{items === 1 ? ' Item' : ' Items'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" component="div">
                                    Place Order
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body1" component="div" align="right">
                                    ${total}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Button>
                </Box>
            </Box>
        </Fragment>
    );
}