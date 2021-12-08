import React from "react"; 
import {Route, Routes} from 'react-router-dom';
import Affichage from "./Affichage";
import Admin from "./Components/Admin";

// ON DEFINIT ICI LES ROUTES 

export default()=>(
    <Routes>
    <Route path="/" exact element={<Affichage/>} />
    <Route path="/admin" element={<Admin/>} />
  </Routes>
);