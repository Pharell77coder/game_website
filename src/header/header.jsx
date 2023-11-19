import './header.css';
import logo from './Puissance4logo copy.png'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="header">
      <Link to="/"><img src={logo} /></Link>
    </div>
  );
}

export default Header;
