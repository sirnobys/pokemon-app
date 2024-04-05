import { Box, Button, Fab, FormControl, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { images } from '../../contants'
import SearchIcon from '@mui/icons-material/Search';



function Navbar() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "80px",
                display: "flex",
                justifyContent: "space-between"

            }}
        >
            <Box sx={{
                // width:'100px',
                px: { md: '20px' },
                my: { md: '20px' },
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                flexDirection: { md: 'row' }
            }}>
                <Box
                    sx={{
                        width: { md: '100px', xs: '50px' }
                    }}>
                    <img width={"100%"} src={images.HomeImage} />

                </Box>

                <Typography
                    sx={{
                        px: { md: '3px', xs: '10px' },
                        fontWeight: '600px',
                        fontFamily: 'Clash Display Variable'
                    }}
                >
                    Poké book
                </Typography>

            </Box>

            <TextField
                size="small"
                sx={{
                    width: { xs: '170px', md: '300px' },
                    padding: { xs: '10px', md: '10px' },
                    borderRadius: "50px",
                }}
                InputProps={{
                    sx: { borderRadius: 50 },
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <Box sx={{ mx: '10px', my: .5 }}>
                <ThemeButton />
            </Box>
        </Box>
    )
}

function ThemeButton() {
    return (

        <Box>
            <Fab
            size="small"
            aria-label="add"
            sx={{
                width:'43px',
                height:'43px'}}
            >
                <Fab
                size="small"
                 sx={{
                    width:'35px',
                    height:'35px'
                }} color="primary" aria-label="add">

                </Fab>
            </Fab>
        </Box>
    )
}

function Body() {
    return (
        <Box component={'div'}
            sx={{
                height: '100vh',
                width: "100%",
                mt: "-20px",
                content: `url(${images.BgNoiseImage})`
            }}
        >

        </Box>
    )
}

const ListView = () => {
    return (
        <Box>
            <Navbar />
            <Body />
        </Box>
    );
};

export default ListView;
