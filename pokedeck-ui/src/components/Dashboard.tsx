import { User } from "../models/user";
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


interface IDashboard {
    currentUser: User | undefined
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

function Dashboard (props: IDashboard) {

    let navigate = useNavigate();

    return (
      
        <>
            <h1>Welcome to your PokeDeck Trainer!</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item>
                        <button onClick={() => navigate('/search')}>Look for a pokemon</button>
                    </Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item><button onClick={() => navigate('/favorites')}>Look at your favorites</button></Item>
                            </Grid>
                    <Grid item xs={6}>
                        <Item>3</Item>
                                </Grid>
                         <Grid item xs={6}>
                                    <Item>4</Item>
                                            </Grid>
                                </Grid> 
           
        </>
        
    );

}


export default Dashboard;