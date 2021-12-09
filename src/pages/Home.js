import { Link } from "react-router-dom"
import { Stack, Button, Box } from "@mui/material"

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 2
            }}
        >
            <Stack spacing={2} direction="row">
                <Button variant="outlined" component={Link} to="menu/1">Tabel 1</Button>
                <Button variant="outlined" component={Link} to="menu/2">Tabel 2</Button>
                <Button variant="outlined" component={Link} to="menu/3">Tabel 3</Button>
            </Stack>
        </Box>
    )
}