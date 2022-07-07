import { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login"
import { User } from './models/user';
import PokemonSearch from './components/PokemonSearch';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Navigation from './components/Navbar';
import Dashboard from './components/Dashboard';
import Favorites from './components/FavoritesDeck';
import { UserData } from './models/userData';
import AllUsers from './components/AllUsers';

function App() {


  const [authUser, setAuthUser] = useState<User>();
  const [userData, setUserData] = useState<UserData[]>([]);

  
  useEffect(() => {

    if(authUser) {
      // @ts-ignore
      fetch(`http://localhost:5000/pokedecks/users/id/${authUser.userAuthId}`)
      .then(res => res.json())
      .then(data => setUserData(data))
      //.then(payload => setUserData(payload.data as UserData[]))
    }
  }, [authUser])
  
  return (
    <div className="App">
      {/* <PokemonSearch /> */}

      <Navigation currentUser={authUser} setCurrentUser={setAuthUser}/>

      <Routes>
        <Route path="/" element={<Login currentUser={authUser} setCurrentUser={setAuthUser}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard currentUser={authUser}/>}/> 
        <Route path="/search" element={<PokemonSearch/>}/>
        <Route path="/favorites" element={<Favorites userId={authUser?.userAuthId}/>}/>
        <Route path="/allUsers" element={<AllUsers />} />
      </Routes>
      
    </div>
  );
}

export default App;
