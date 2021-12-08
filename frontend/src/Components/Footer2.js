import React from "react";
import '../App.css';


// ICI ON DEFINIT LE RENDU DU FOOTER 
export default class Footer extends React.Component {

  render() {
  

    return (

<footer className="bg-dark text-center text-white-50 lg-start my-4 ">
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2"}}>
    <p> Made with &#129293; by Océane JÉGO-RAGAS and Pierre-Louis NGO | M.SEWERYN | WEB PROJECT OCRES </p> 
  </div>
</footer>
    
    );
  }
}