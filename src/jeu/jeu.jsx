import React from 'react'
import Board from './board';
import './jeu.css'


function Jeu() {
  return (
    <div className="main_game">
        <div className="player1">
            <h3>Nom du joueur 1</h3>
            <img src="./src\accueil\icon.jpg" alt="photo de profil" />
        </div>
        <div className="player2">
            <h3>Nom du joueur 2</h3>
            <img src="./../accueil/icon.jpg" alt="photo de profil" />
        </div>
        <div className="gridgame"><Board /></div>
    </div>
  )
}

export default Jeu;