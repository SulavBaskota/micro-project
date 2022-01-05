import { Fragment, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert } from "@mui/material";
import { Slider } from "@mui/material";
import QRCode from 'qrcode.react';

export default function GenerateQR() {
    const [tableNumber, setTableNumber] = useState('');
    const [qrCodeText, setQRCodeText] = useState('');
    const [size, setSize] = useState(200);
    const [showAlert, setShowAlert] = useState(false);
    const [canDownload, setCanDownload] = useState(false);

    const generateQRCode = () => {
        if (tableNumber === '') {
            setShowAlert(true);
        } else {
            setShowAlert(false);
            setQRCodeText('http://192.168.201.128:3000/menu/' + tableNumber);
            setCanDownload(true);
        }
    }

    const handleChange = e => {
        setTableNumber(e.target.value);
        setShowAlert(false);
        setCanDownload(false);
    }

    const downloadQRCode = () => {
        const qrCodeURL = document.getElementById('qrCodeEl')
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        console.log(qrCodeURL)
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code_Table_No_" + tableNumber + ".png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }

    return (
        <Fragment>
            <Box sx={{ m: 10, justifyContent: 'center', display: 'flex' }}>
                <Stack spacing={3}>
                    <Stack spacing={2} direction="row">
                        <TextField
                            id="table-number"
                            label="Table Number"
                            placeholder="Enter Table Number"
                            value={tableNumber}
                            variant="outlined"
                            onChange={e => handleChange(e)}
                            size="small"
                        />
                        <Button variant="contained" onClick={generateQRCode}>
                            Generate
                        </Button>
                    </Stack>
                    <Box>
                        <Typography variant="h6" component="div">
                            Select Size:
                        </Typography>
                        <Slider
                            min={100}
                            max={350}
                            value={size}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            onChange={e => setSize(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                        <QRCode
                            id="qrCodeEl"
                            size={size}
                            value={qrCodeText}
                        />
                    </Box>
                    {canDownload ? (
                        <Button
                            variant="contained"
                            onClick={downloadQRCode}
                            color="success"
                        >
                            Download
                        </Button>
                    ) : null}
                    {showAlert ? (
                        <Alert severity="error">Table Number Cannot be empty.</Alert>
                    ) : null}
                </Stack>
            </Box>
        </Fragment>
    );
}