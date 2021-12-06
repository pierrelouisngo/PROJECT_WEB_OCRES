import React from "react";
//import './App.css';

export default class Widget3 extends React.Component {
  state = {
    loading: true,
    info: null
  };

  async componentDidMount() {
    const url ='http://localhost:3001/index';
    const response = await fetch(url, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'}})
    const data = await response.json();
    this.setState({ info: data, loading: false });
    console.log(data);
    console.log(this.state.info[0].title);
  }

  render() {

    if (this.state.loading) {
        return <div>loading...</div>;
      }
  
      if (!this.state.info) {
        return <div>error</div>;
      }
  

    return (
        <div className="card" >
      <div className="card-body">
          <h5>Data &#128203;</h5>  
          <ul>
          <li>{this.state.info[0]._id}</li>   
          <li>{this.state.info[0].title}</li>  
          <li>{this.state.info[0].description}</li>
          <li>{this.state.info[0].date}</li>
         </ul>
        </div>  
        </div>

    
    );
  }
}