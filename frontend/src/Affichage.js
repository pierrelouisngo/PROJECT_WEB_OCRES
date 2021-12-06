import React from "react";
import Widget from "./Components/Widget";
import Widget2 from "./Components/Widget2";
import Widget3 from "./Components/Widget3";
import Widget4 from "./Components/Widget4";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import Test from "./Components/Test";
import Test2 from "./Components/Test2";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


 



 class App extends React.Component {

  render(){
    return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
    <Widget/> 
     </div>
    <div className="col">
      <Widget2/>
      </div> 
      <div className="col"> <Widget3/> </div>
        <div className="col">
          <Widget4/>
        </div>
        <div className="col">
        <Test/>
        </div>
        <div className="col">
         <Test2/>
        </div>
  </div> 
  <Footer2/>
  </div>

    
  
    

    );
  }

 }

 export default App;