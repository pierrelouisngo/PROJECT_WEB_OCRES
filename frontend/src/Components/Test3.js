import React from 'react';
import axios from 'axios';

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

    render=()=>
    {
        return(
            <div className="card">
            <div className="card-body">
            <div className="Widget">
                <center><h1>Météo du jour</h1></center>
                <div className="divWidget">
                    <input type="text" className="barreRech" value = {this.state.recherche} onChange={(e)=>this.termeRecherche(e)} onKeyPress={(e)=>{if(e.key=='Enter')this.getmeteo()}}></input>
                    <button className ="btnRech" onClick={()=>this.getmeteo()}>Recherche</button>
                </div>
                <hr></hr>
                  
                <div className="divWidget">

                  <div className="subDiv50 bordureD"><center>
                    {!!this.state.meteo && (<>
                    <h2>Ville : {this.state.meteo.name} </h2>
                    
                    <hr></hr>
                    <p>Température : {this.state.meteo.main.temp}°C </p>
                    
                    <p> Humidité : {this.state.meteo.main.humidity}%</p>
                    </>)}
                  </center></div>

                  <div className="subDiv50"><center>
                  {!!this.state.meteo && (<>
                    <img src={this.infosMeteo()}></img>
                    <h2>{this.state.meteo.weather[0].main}</h2>  
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