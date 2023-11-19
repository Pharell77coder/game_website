import './nav.css';
import {
  Link
} from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div class="sidebar">
        <li><Link to="/"><i class="fa fa-fw fa-home"></i> Accueil</Link></li>
        <li><Link to="/login"><i class="fa fa-fw fa-cog"></i> login</Link></li>
        <li><Link to="/profil"><i class="fa fa-fw fa-user"></i> Profil</Link></li>
    </div>
  </nav>
  );
}

export default Nav;