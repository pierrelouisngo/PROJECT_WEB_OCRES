import React from 'react';
//import './App.css';
import axios from 'axios';


export default class Widget6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            utilisateur: undefined,
            chanson:undefined,
            recherche: '',
            titre:'',
        }
    }

    termeRecherche(e) {
        this.setState({ recherche: e.target.value })
    }

    trouverTitre(e){
        this.setState({titre:e.target.value})
    }



    getall() {
        axios.get(`https://api.lyrics.ovh/v1/${this.state.recherche}/${this.state.titre}`)
            .then(res => {
                const nvUtilisateur = res.data;
                this.setState({ utilisateur: nvUtilisateur }
                );
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
                <center><h5>Envie de chanter ? 
&#128104; </h5></center>
                <div className="divWidget">
                    <input type="text" className="barreRech" placeholder="Artiste" value={this.state.recherche} onChange={(e) => this.termeRecherche(e)} onKeyPress={(e) => { if (e.key == 'Enter') this.getall() }}></input>
                   <br/>
                   <input type="text" placeholder="Titre de la chanson" className="barreRech" value={this.state.titre} onChange={(e) => this.trouverTitre(e)} onKeyPress={(e) => { if (e.key == 'Enter') this.getall() }}></input> 
                   <br/>
                    <button className="btnRech" onClick={() => this.getall()}>Recherche</button>
                </div>
                <hr></hr>


                {!!this.state.utilisateur && (<>
                    <div className="infoUser">
                        <div className="detailProfil">
                            <small>{this.state.utilisateur.lyrics}</small>
                        </div>
                    </div>
                </>)}
                </div>
               </div>
               </div>  
        );
    }
} 
 