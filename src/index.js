import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/header';
import Nav from './nav/nav';
import Acceuil from './accueil/accueil';
import Login from './login/login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);
