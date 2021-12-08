import React from 'react';
import axios from 'axios';


// API QUI AFFICHE LA METEO DU JOUR EN FONCTION DE LA VILLE 
class Test3 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          recherche: 'Paris',
          meteo : undefined,
        }         
    }

    termeRecherche(e)
    {
      this.setState({recherche: e.target.value})
    }

    // APPEL DE L'API METEO 
    getmeteo()
    {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.recherche}&units=metric&appid=4081444b7b90198136fefe6ed4ccf35b`)
      .then(res => {
        const nvmeteo = res.data;
        this.setState({ meteo: nvmeteo });
      })
    }

    infosMeteo()
    {
      let meteo;
      
      !!this.state.meteo && (meteo = this.state.meteo.weather[0].icon);
      return('http://openweathermap.org/img/wn/'+meteo+'@2x.png')
    }

    componentWillMount()
    {
      this.getmeteo();
    }
// AFFICHAGE DES INFORMATIONS 
    render=()=>
    {
        return(
            <div className="card">
            <div className="card-body">
            <div className="Widget">
                <center><h5>Météo du jour &#9728;</h5></center>
                <div className="divWidget">
                    <input type="text" className="barreRech" value = {this.state.recherche} onChange={(e)=>this.termeRecherche(e)} onKeyPress={(e)=>{if(e.key=='Enter')this.getmeteo()}}></input>
                    <button className ="btnRech" onClick={()=>this.getmeteo()}>Recherche</button>
                </div>
                <hr></hr>
                  
                <div className="divWidget">

                  <div className="subDiv50 bordureD"><center>
                    {!!this.state.meteo && (<>
                    <h6>Ville : {this.state.meteo.name} </h6>
                    
                    <hr></hr>
                    <p>Température : {this.state.meteo.main.temp}°C </p>
                    
                    <p> Humidité : {this.state.meteo.main.humidity}%</p>
                    </>)}
                  </center></div>

                  <div className="subDiv50"><center>
                  {!!this.state.meteo && (<>
                    <img src={this.infosMeteo()}></img>
                    <h6>{this.state.meteo.weather[0].main}</h6>  
                    </>)}           
                  </center></div>
                    
                </div>
                
            </div>
            </div>
            </div>
            
            
        );
    }
}

export default Test3;