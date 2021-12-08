
import React, { PureComponent } from 'react';

// IMPORTATION DES LIBRAIRIES RECHART 
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import 'bootstrap/dist/css/bootstrap.min.css';

//import './App.css';

// CREATION D'UN TABLEAU VIDE POUR STOCKER LES DONNEES 
const donnee = [
  {
    name: '',
    playcount:0
  },
  {
    name: '',
    playcount:0
  },
  {
    name: '',
    playcount:0
  },
  {
    name:'',
    playcount:0
  },
  { 
    name:'',
    playcount:0

  }

];


// WIDGET QUI AFFICHE UN GRAPHIQUE EN FONCTION DES DONNEES D'UNE API

export default class Widget2 extends React.Component {

 

  state = {
    loading: true,
    info: null,
    
  };

  // APPEL DE L'API LAST.FM

  async componentDidMount() {
    const url = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=30046088d36dc90443d8ef9df38a0e14&format=json'
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

    donnee[0].name=this.state.info.tracks.track[0].name;
    donnee[0].playcount=this.state.info.tracks.track[0].playcount;
    donnee[1].name=this.state.info.tracks.track[1].name;
    donnee[1].playcount=this.state.info.tracks.track[1].playcount;
    donnee[2].name=this.state.info.tracks.track[2].name;
    donnee[2].playcount=this.state.info.tracks.track[2].playcount;
    donnee[3].name=this.state.info.tracks.track[3].name;
    donnee[3].playcount=this.state.info.tracks.track[3].playcount;
    donnee[4].name=this.state.info.tracks.track[4].name;
    donnee[4].playcount=this.state.info.tracks.track[4].playcount;

// AFFICHAGE DU GRAPHIQUE EN BARRE 
    return (  
      <div className="card" style={{marginRight :"450px"}} >
      <div className="card-body">
      <h5>Top 5 des titres &#128202;</h5>   
      <BarChart
            width={350}
            height={400}
            data={donnee}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="playcount" fill="#F9629F" />
          </BarChart>
          </div>
          </div>
      
    );
  }
}
