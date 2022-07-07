import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


function Navigation() {

    const navigate = useNavigate();

    function goTo(route: string) {
        navigate(route);
    }
    
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Noto Sans KR',
            'sans-serif',
          ].join(','),
        },});

    return(
        <ThemeProvider theme={theme}>
            <AppBar sx={{ bgcolor: "#D5A100" }} position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.18rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            Pokedeck
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )

}

export default Navigation;