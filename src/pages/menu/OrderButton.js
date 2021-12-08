import * as React from 'react';
import { Box, Button } from '@mui/material';
import { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function OrderButton({ tableId, order, itemCount, total }) {
    
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
                        position: 'Fixed',
                        bottom: 0,
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        color="success"
                        component={Link}
                        to="/review"
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
                                    {itemCount}{itemCount === 1 ? ' Item' : ' Items'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" component="div" align="center">
                                    Place Order
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body1" component="div" align="right">
                                    Rs.{total}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Button>
                </Box>
            </Box>
        </Fragment>
    );
}