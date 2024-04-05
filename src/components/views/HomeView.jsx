import { Box, Button, Typography } from "@mui/material";
import { default as HomeImage } from "../../images/homeImage.svg"

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function Search() {
    return (
        <Paper
            component="form"
            sx={{
                p: '1px 2px',
                display: 'flex',
                alignItems: 'center',
                width: { xs: '350px' },
                border: '5px solid #E85382',
                borderRadius: '50px'

            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter pokemon name"
                inputProps={{ 'aria-label': 'enter pokemon name' }}
            />
            <IconButton type="button" sx={{ p: '10px',backgroundColor:"#E85382", color:"white" }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
const HomeView = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: {
                    xs: 5,
                    md: 5
                }
            }}
            alt="Logo"
        >
            <Box
                component="img"
                sx={{
                    content: `url(${HomeImage})`,
                }}
                alt="Logo"
            />

            <Typography
                sx={{
                    fontSize: '48px',
                    fontWeight: '600px',
                    fontFamily: 'Clash Display Variable'
                }}
            >
                Poké book
            </Typography>
            <Typography
                sx={{
                    // width:'370px'
                }}
            >
                Largest Pokémon index with information <br />about every Pokemon you can think of.
            </Typography>

            <Box pt={3}>
                <Search />
            </Box>
            <Button 
            variant="text"
            sx={{
                textTransform:"none",
                textDecoration:"underline",
                color:"black"
            }}
            >
                View all
            </Button>
        </Box>
    );
};

export default HomeView;
