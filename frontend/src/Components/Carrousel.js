// COMPOSANT QUI PERMET DE JOUER UNE VIDEO YT 

import React, { useState } from 'react'
class Carrousel extends React.Component {

    render(){
      return ( 
        <div className="card" >
        <div className="card-body">
       <div>
           <iframe width="350" height="350" src="https://www.youtube.com/embed/xmVGH9fF_Mk?&autoplay=1&loop=1&showinfo=0&controls=0&playlist=xmVGH9fF_Mk" allow="autoplay"></iframe>
        </div>
        </div>
        </div>
      );
    }
  
   }
  
   export default Carrousel;