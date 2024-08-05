import React from 'react'
import "./App.css";
import PlayersList from './components/PlayersList';
import NavBar from './NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  
  return (
    <div>
      <NavBar />
      <PlayersList />
          </div>
  );
}

export default App