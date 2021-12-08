import React from 'react';
import axios from 'axios';
 
class Test extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            topTitle : undefined,
            topArtist : undefined,
            utilisateur : undefined,
            recherche: '',
        }
    }
 
    termeRecherche(e)
    {
      this.setState({recherche: e.target.value})
    }
 
    getall()
    {
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${this.state.recherche}&api_key=4934f604a95406e95dea7ba0ace62d11&format=json`)
        .then(res => {
          const nvTopTitle = res.data;
          this.setState({ topTitle: nvTopTitle });
        });
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${this.state.recherche}&api_key=4934f604a95406e95dea7ba0ace62d11&format=json`)
        .then(res => {
          const nvTopArtist = res.data;
          this.setState({ topArtist: nvTopArtist });
        });
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${this.state.recherche}&api_key=4934f604a95406e95dea7ba0ace62d11&format=json`)
        .then(res => {
          const nvUtilisateur = res.data;
          this.setState({ utilisateur: nvUtilisateur});
        })
    }
 
    componentDidMount()
    {
      this.getall();
    }
 
    render=()=>
    {
        return(
            <div className="card">
            <div className="card-body">
            <div className="Widget">
                <center><h5>LastFM - Affichage du profil d'un utilisateur &#128102;</h5></center>
                <div className="divWidget">
                    <input type="text" className="barreRech" value = {this.state.recherche} onChange={(e)=>this.termeRecherche(e)} onKeyPress={(e)=>{if(e.key=='Enter')this.getall()}}></input>
                    <button className ="btnRech" onClick={()=>this.getall()}>Recherche</button>
                </div>
                <hr></hr>
                
                
                  {!!this.state.utilisateur && (<>
                  <div className="infoUser">
                    <div>
                      <img className="photoProfil" src={this.state.utilisateur.user.image[2]["#text"]}></img>
                    </div>
                    <div className="detailProfil">
                      <h5>{this.state.utilisateur.user.name}</h5>
                      <p>Nombre de lectures : {this.state.utilisateur.user.playcount}</p>
                    </div>
                     
                  </div>
                  </>)}   
                
                <hr></hr>
                <div>
                  <center><h6>Top 5 de ces titres préférés :</h6></center>
                  {!!this.state.topTitle && (<>
                    {!!this.state.topTitle.toptracks.track[0] && (<><div className="morceau">
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[0].name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[0].artist.name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[0].playcount} écoutes</p>
                    </div></>)}
 
                    {!!this.state.topTitle.toptracks.track[1] && (<><div className="morceau">
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[1].name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[1].artist.name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[1].playcount} écoutes</p>
                    </div></>)}
 
                    {!!this.state.topTitle.toptracks.track[2] && (<><div className="morceau">
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[2].name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[2].artist.name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[2].playcount} écoutes</p>
                    </div></>)}
 
                    {!!this.state.topTitle.toptracks.track[3] && (<><div className="morceau">
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[3].name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[3].artist.name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[3].playcount} écoutes</p>
                    </div></>)}
 
                    {!!this.state.topTitle.toptracks.track[4] && (<><div className="morceau">
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[4].name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[4].artist.name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[4].playcount} écoutes</p>
                    </div></>)}
 
                  </>)}     
              </div>
              <hr></hr>
              <div>                    
                <center><h6>Top 5 de ces artistes préférés :</h6></center>
                {!!this.state.topArtist && (<>
                
                  {!!this.state.topArtist.topartists.artist[0] && (<><div className="morceau">
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[0].name}</p>
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[0].playcount} écoutes</p>
                </div></>)}
                {!!this.state.topArtist.topartists.artist[1] && (<><div className="morceau">
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[1].name}</p>
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[1].playcount} écoutes</p>
                </div></>)}
                {!!this.state.topArtist.topartists.artist[2] && (<><div className="morceau">
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[2].name}</p>
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[2].playcount} écoutes</p>
                </div></>)}
                {!!this.state.topArtist.topartists.artist[3] && (<><div className="morceau">
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[3].name}</p>
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[3].playcount} écoutes</p>
                </div></>)}
                {!!this.state.topArtist.topartists.artist[4] && (<><div className="morceau">
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[4].name}</p>
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[4].playcount} écoutes</p>
                </div></>)}
                
                
                </>)}
              </div>
                    
            </div>
            </div>
            </div>
        );
    }
} 
 
export default Test;