import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/blog">Dishes</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    );
}