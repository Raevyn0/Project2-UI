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



function App() {


  const [authUser, setAuthUser] = useState<User>();
  const [userData, setUserData] = useState<UserData[]>([]);


  useEffect(() => {
    fetch('http://localhost:5000/pokedecks/users')
    .then(res => res.json())
    .then(payload => setUserData(payload.data as UserData[]))
  })

  console.log(userData);
  
  return (
    <div className="App">
      {/* <PokemonSearch /> */}

      <Navigation currentUser={authUser} setCurrentUser={setAuthUser}/>

      <Routes>
        <Route path="/" element={<Login currentUser={authUser} setCurrentUser={setAuthUser}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard currentUser={authUser}/>}/> 
        <Route path="/search" element={<PokemonSearch/>}/>
        <Route path="/  " element={<Favorites userId={authUser?.id}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
