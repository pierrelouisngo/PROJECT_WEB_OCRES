
//import './App.css';
import Footer2 from "./Footer2";
import Widget3 from "./Widget3";
import Widget4 from "./Widget4";
import React, { useState }  from 'react'
class Admin extends React.Component {

  render(){
    return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
    <Widget3/> 
     </div>
    <div className="col">
      <Widget4/>
      </div> 
      <div className="col">
      <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        <div className="col">
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

  </div> 
  </div>
  </div>
  
  <Footer2/>
  </div>


    );
  }

 }

export default Admin;