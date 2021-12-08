
import React, { useState } from 'react'
import photo1 from "./photo1.jpg";
class Carrousel extends React.Component {

    render(){
      return ( 
        <div className="card" >
        <div className="card-body">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://i.postimg.cc/6QHQM9vb/263477008-1113484386145924-2189070420098373664-n.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.postimg.cc/d0Sq84bz/264551149-551092573027498-5741424435646946572-n.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.postimg.cc/15csWmx0/263889830-427804672262941-3790011906600849688-n.jpg" alt="Third slide"/>
    </div>
  </div>
</div>
</div>
</div>
      );
    }
  
   }
  
   export default Carrousel;