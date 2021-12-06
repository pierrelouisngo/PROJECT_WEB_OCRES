import React from "react";
//import './App.css';

export default class Widget extends React.Component {
  state = {
    loading: true,
    info: null
  };

  async componentDidMount() {
    const url ="https://newsapi.org/v2/everything?q=concerts&apiKey=58ddc1ae133043e18b299fc024702200";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ info: data, loading: false });
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
      <img className="card-img-top" src="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=" alt="img_top"></img>
    <div className="card-body">
        <h5>News &#128240;</h5>   
        <a href={this.state.info.articles[0].url} target="_blank">{this.state.info.articles[0].title}</a>
        <span>({this.state.info.articles[0].source.name})</span> 
        <br/>
        <br/>
        <a href={this.state.info.articles[1].url} target="_blank">{this.state.info.articles[1].title}</a>
        <span>({this.state.info.articles[1].source.name})</span> 
        <br/> 
        <br/>  
        <a href={this.state.info.articles[2].url} target="_blank">{this.state.info.articles[2].title}</a>
        <span>({this.state.info.articles[2].source.name})</span> 
      </div>  
      </div>

    
    );
  }
}