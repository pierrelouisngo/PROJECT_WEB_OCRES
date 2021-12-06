import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from 'react-router-dom';


class Header extends React.Component {

    render(){
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">Dashboard &#127925;</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <a className="nav-link" href="http://localhost:3001/admin">Admin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
      );
    }
  
   }
  
   export default Header;

