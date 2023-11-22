import React from 'react';
import './index.css';
import Header from './header/header';
import Nav from './nav/nav';
import Acceuil from './accueil/accueil';
import Login from './login/login';
import Jeu from './jeu/jeu';
import Profil from './profil/profil'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useToken from './useToken';

function App() {
  /*
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }*/
  
  return (
  <Router>
    <Header />
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/jeu" element={<Jeu />} />
      </Routes>
    </main>    
  </Router>
  );
}

export default App;