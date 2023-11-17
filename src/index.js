import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/header';
import Nav from './nav/nav';
import Acceuil from './accueil/accueil';
import Login from './login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Nav />
    <main>
      <Acceuil />
      <Login />
    </main>
  </React.StrictMode>
);
