import './accueil.css';
import Friends from './amis.jsx';
import Ranking from './classement.jsx';
import {Link} from "react-router-dom";

function Acceuil() {
  return (
    <div class="acceuil">
        <div class="frame1">
          <ul>
            <li className="litop"><Link to="/jeu">Jouer contre un ordinateur</Link></li>
            <li><Link to="/jeu">Partie en ligne</Link></li>
            <li><Link to="/jeu">Jouer en local</Link></li>
            <li className="libottom"><Link to="/jeu">Jouer contre Un ami</Link></li>
          </ul>
        </div>
        <div className="frame2"><Ranking /></div>
        <div className="frame3"><Friends /></div>
    </div>
  );
}

export default Acceuil;
