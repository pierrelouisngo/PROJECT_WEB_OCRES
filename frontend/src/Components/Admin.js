
//import './App.css';
import Footer2 from "./Footer2";
import Widget3 from "./Widget3";
import Widget4 from "./Widget4";
import Widget5 from "./Widget5";
import Widget9 from "./Widget9";


import React, { useState } from 'react'
class Admin extends React.Component {

  render() {
    return (
      <div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Widget3 />
          </div>
          <div className="col">
            <Widget4 />
          </div>

          <div className="col">
            <Widget9 />
          </div>


          <div className="col">
            <Widget5 />
          </div>


        </div>

        <Footer2 />
      </div>


    );
  }

}

export default Admin;