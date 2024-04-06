import { Box, Button, Fab, FormControl, Grid, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { images, links } from '../../contants'
import SearchIcon from '@mui/icons-material/Search';
import ListCard from "../ListCard";
import { useContext, useEffect } from "react";
import axios from "axios";
import { PokemonContext } from "../../contexts/PokemonContext";




const ListView = () => {
    const { setPokemonData, pokemonData } = useContext(PokemonContext)

    const fetchPokemon = async (searchValue) => {
        setPokemonData([])
        const res = await axios.get(links.BASE_URL)

        res.data?.results?.map(async (val, idx) => {
            const res = await fetchPokemonDetails(val.url)
            setPokemonData(state => {
                state = [...state, res.data]
                return state
            })
        }
        )
    }
    const fetchPokemonDetails = async (url) => {
        const res = await axios.get(url)
        return res
    }
    useEffect(() => {
        fetchPokemon()
    }, [])


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
                        width: '43px',
                        height: '43px'
                    }}
                >
                    <Fab
                        size="small"
                        sx={{
                            width: '35px',
                            height: '35px'
                        }} color="primary" aria-label="add">

                    </Fab>
                </Fab>
            </Box>
        )
    }

    function Body() {
        return (
            <Box component={'div'}
                align="center"
                sx={{
                    minHeight: '100vh',
                    width: "100%",
                    mt: "-20px",
                    background: `url(${images.BgNoiseImage})`
                }}
            >
                <Grid pt={5} px={10} container spacing={2}>
                    {pokemonData?.map((data,idx)=>(
                    <Grid key={idx} item xs={12} sm={6} lg={3} md={3}>
                        <ListCard data={data}/>
                    </Grid>
                    ))}
                </Grid>

            </Box>
        )
    }

    return (
        <Box>
            <Navbar />
            <Body />
        </Box>
    );
};



export default ListView;
