
import React from 'react';
//import './App.css';
import axios from 'axios';

// WIDGET QUI PERMET D'AFFICHER LE PROFIL D'UN ARTISTE HEBERGE SUR BANDSINTOWN , D'AVOIR ACCES A SA PLAYLIST EGALEMENT 
export default class Widget6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topTitle: undefined,
            topArtist: undefined,
            utilisateur: undefined,
            recherche: '',
        }
    }

    termeRecherche(e) {
        this.setState({ recherche: e.target.value })
    }

    getall() {
        axios.get(`https://rest.bandsintown.com/artists/${this.state.recherche}/?app_id=0ca0cf2b477cf81859c0a0e548b04dd3`)
            .then(res => {
                const nvUtilisateur = res.data;
                this.setState({ utilisateur: nvUtilisateur });
            })
    }

    componentDidMount() {
        this.getall();
    }

    render = () => {
        return (
     <div className="card">
       <div className="card-body">
            <div className="WidgetOC1">
                <center><h5>Bandswintown - Profil artiste &#127908;</h5></center>
                <div className="divWidget">
                    <input type="text" className="barreRech" value={this.state.recherche} onChange={(e) => this.termeRecherche(e)} onKeyPress={(e) => { if (e.key == 'Enter') this.getall() }}></input>
                    <button className="btnRech" onClick={() => this.getall()}>Recherche</button>
                </div>
                <hr></hr>
  
                {!!this.state.utilisateur && (<>
                    <div className="infoUser">
                        <div className="detailProfil">
                        <img className="photoProfil2" src={this.state.utilisateur.thumb_url}></img>
                            <h5>{this.state.utilisateur.name}</h5>
                            <small><a href={this.state.utilisateur.url} target="_blank">Prendre un ticket</a></small>
                            <small>Events: {this.state.utilisateur.upcoming_event_count}</small>
                            <small><a href ={this.state.utilisateur.links[0].url} target="_blank">Ecouter sa playlist</a></small>
                        </div>
                    </div>
                </>)}
                </div>
               </div>
               </div>  
        );
    }
} 
 