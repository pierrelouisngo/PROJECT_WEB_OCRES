import {Link, NavLink} from 'react-router-dom';
import Routes from "./Routes";
import Admin from "./Components/Admin";
import Affichage from "./Affichage";
import React from "react"; 

// CETTE FONCTION PERMET DE CREER LE HEADER ET DE FAIRE LA NAVIGATION ENTRE LES DIFFERENTS COMPOSANT S
function App() {
  return (
    <div className="navigation">
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Dashboard &#127911;
        </NavLink>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Routes/>
  </div>
  
);
  

}
export default App;