import React, { useState } from 'react';
import './index.css';
import Header from './header/header';
import Nav from './nav/nav';
import Acceuil from './accueil/accueil';
import Login from './login/login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {/*
    const [token, setToken] = useState();
  
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
      </Routes>
    </main>    
    </Router>
  );
}

export default App;