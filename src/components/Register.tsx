import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

interface IRegisterProps {

}


const theme = createTheme();


function Register(props: IRegisterProps){

    let [username, setUser] = useState('');
    let [password, setPass] = useState('');
    let [email, setEmail] = useState('');
    let [errMsg, setErrMsg] = useState('');

    let updateInput = (e: SyntheticEvent) => {
        let box = e.target as HTMLInputElement;
        if(box.id === "reg-user"){
            setUser(box.value);
        }
        else if(box.id === "reg-pass"){
            setPass(box.value);
        }
        else if(box.id === "reg-email"){
            setEmail(box.value);
        }
    }

    let register = (e: SyntheticEvent) => {
        if(!username || !password){
            if(!username)   setErrMsg('Please enter a username!');
            else setErrMsg('Please enter a password!');
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
                >
                    <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                name="reg-email"
                                required
                                fullWidth
                                id="reg-email"
                                label="Email Address"
                                autoFocus
                                onChange={updateInput}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                name="reg-user"
                                required
                                id="reg-user"
                                label="Username"
                                autoFocus
                                onChange={updateInput}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                type="password"
                                name="reg-pass"
                                required
                                id="reg-pass"
                                label="Password"
                                autoFocus
                                onChange={updateInput}
                                />        
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )

}

export default Register;