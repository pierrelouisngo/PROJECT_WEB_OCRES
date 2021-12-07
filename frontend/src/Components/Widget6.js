
import React from 'react';
//import './App.css';
import axios from 'axios';


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
                <center><h5>Bandswintown - Profil artiste</h5></center>
                <div className="divWidget">
                    <input type="text" className="barreRech" value={this.state.recherche} onChange={(e) => this.termeRecherche(e)} onKeyPress={(e) => { if (e.key == 'Enter') this.getall() }}></input>
                    <button className="btnRech" onClick={() => this.getall()}>Recherche</button>
                </div>
                <hr></hr>


                {!!this.state.utilisateur && (<>
                    <div className="infoUser">
                    <img className="photoProfil" src={this.state.utilisateur.thumb_ur}></img>
                        <div className="detailProfil">
                            <h5>{this.state.utilisateur.name}</h5>
                            <p> URL : {this.state.utilisateur.url}</p>
                            <p>Events: {this.state.utilisateur.upcoming_event_count}</p>
                        </div>

                    </div>
                </>)}
                </div>
               </div>
               </div>  
        );
    }
} 
 