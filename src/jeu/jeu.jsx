import React from 'react'
import './jeu.css'

function Jeu(props) {
  return (
    <div className="main_game">
        <div className="player1">
            <h3>Nom du joueur 1</h3>
            <img src="/" alt="photo de profil" />
        </div>
        <div className="player2">
            <h3>Nom du joueur 2</h3>
            <img src="/" alt="photo de profil" />
        </div>
        <div className="gridgame"></div>
    </div>
  )
}

export default Jeu;