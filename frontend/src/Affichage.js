import React from "react";
import Widget from "./Components/Widget";
import Widget2 from "./Components/Widget2";
import Widget3 from "./Components/Widget3";
import Widget4 from "./Components/Widget4";
import Widget5 from "./Components/Widget5";
import Widget6 from "./Components/Widget6";
import Widget7 from "./Components/Widget7";
import Widget8 from "./Components/Widget8";
import Widget9 from "./Components/Widget9";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Carrousel from "./Components/Carrousel";
import Footer2 from "./Components/Footer2";
import Test from "./Components/Test";
import Test2 from "./Components/Test2";
import Test3 from "./Components/Test3";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



 class App extends React.Component {

  render(){
    return (
    <div className="affichage">
      <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
    <Widget/> 
     </div>
    <div className="col">
      <Widget2/>
      </div> 

      <div className="col"> <Widget3/> </div>

        <div className="col">
          <Test/>
        </div>
        <div className="col">
        <Test3/>
        </div>
        <div className="col">
         <Test2/>
        </div>
        <div className="col">
         <Widget6/>
        </div>
        <div className="col">
         <Widget7/>
        </div>
        <div className="col">
         <Widget8/>
        </div>
        <div className="col">
         <Carrousel/>
        </div>
  </div> 
  <Footer2/>
  </div>

    );
  }

 }

 export default App;