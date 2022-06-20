import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import { User } from './models/user';
import PokemonSearch from './components/PokemonSearch';
import Dashboard from './components/Dashboard';

function App() {

  const [authUser, setAuthUser] = useState<User>();
  
  return (
    <div className="App">
      {/* <PokemonSearch /> */}
      <Login currentUser={authUser} setCurrentUser={setAuthUser}/>
      <Dashboard currentUser={undefined}/>
    </div>
  );
}

export default App;
