import { SyntheticEvent, useEffect, useState } from 'react'
import { Pokemon } from '../models/pokemon'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function PokemonSearch() {

    const [pokeData, setPokeData] = useState<Pokemon[]>([])
    const [filterPoke, setFilterPoke] = useState(pokeData);
    const [search, setSearch] = useState<string>("")

useEffect(() => {

    fetch(`https://api.pokemontcg.io/v2/cards/`)
    .then(res => res.json())
    .then(payload => setPokeData(payload.data as Pokemon[]))

}, [])

console.log(pokeData)

const filter = (e: SyntheticEvent) => {
    const keyword = ((e.target as HTMLInputElement).value);
    console.log('SEARCH KEYWORD', keyword)

    if (keyword === "") {
        setFilterPoke(pokeData)
    } else {
        const result = pokeData.filter((poke) => {
            return poke.name.toLowerCase().startsWith(keyword.toLowerCase())
        })
        setFilterPoke(result);
    }
    setSearch(keyword)
}
console.log('Filtered', filterPoke)
console.log('SEARCH',search)

const theme = createTheme();
if(filterPoke.length === 0  && !search) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
    
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Pokemon layout
                        </Typography>
    
                        <input
                            type="search"
                            onChange={filter}
                            placeholder="Filter"
                            value={search}
                        />
                    </Container>
                </Box>
                <Container sx={{py: 2}} maxWidth="lg">
                    <Grid container spacing={4}>
                        {pokeData.map((poke, idx) => (
                            <Grid item key={idx} xs={12} sm={6} md={3}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            pt: '10.25%',
                                        }}
                                        image={poke.images.small}
                                        alt={poke.name}
                                    />
                                    <CardContent sx={{ flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {poke.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Add</Button>
                                    </CardActions>    
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    )
} else {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
    
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Pokemon layout
                        </Typography>
    
                        <input
                            type="search"
                            onChange={filter}
                            placeholder="Filter"
                            value={search}
                        />
                    </Container>
                </Box>
                <Container sx={{py: 2}} maxWidth="lg">
                    <Grid container spacing={4}>
                        {filterPoke.map((poke, idx) => (
                            <Grid item key={idx} xs={12} sm={6} md={3}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            pt: '10.25%',
                                        }}
                                        image={poke.images.small}
                                        alt={poke.name}
                                    />
                                    <CardContent sx={{ flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {poke.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Add</Button>
                                    </CardActions>    
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    )
    
}
}

export default PokemonSearch