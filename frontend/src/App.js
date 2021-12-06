import {Link, NavLink} from 'react-router-dom';
import Routes from "./Routes";
import Admin from "./Components/Admin";
import About from "./Components/About";
import Affichage from "./Affichage";
import React from "react"; 


function App() {
  return (
    <div className="navigation">
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Dashboard &#127925;
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