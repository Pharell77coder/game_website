import './accueil.css';
import icon from './icon.jpg';
import Friends from './amis.jsx';
import Ranking from './classement.jsx';

function Acceuil() {
  return (
    <div class="acceuil">
        <div class="frame1">
            <img src={icon} alt="image puissance 4"/>
            <ul>
              <li><a href="..\jeu\jeu.html">Jouer Contre Ordinateur</a></li>
              <li><a href="..\jeu\jeu.html">Partie en ligne</a></li>
              <li><a href="..\jeu\jeu.html">Jouer Contre Un Ami</a></li>
            </ul>
        </div>
        <div className="frame2"><Ranking /></div>
        <div className="frame3"><Friends /></div>
    </div>
  );
}

export default Acceuil;
