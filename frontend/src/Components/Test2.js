
import React from 'react';
import axios from 'axios';
 
class Test2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            
            trendArt : undefined,
            trendTitle : undefined
        }
    }
 
    gettrend()
    {
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=4934f604a95406e95dea7ba0ace62d11&format=json`)
        .then(res => {
          const nvTopTitle = res.data;
          this.setState({ trendTitle: nvTopTitle});
        });
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4934f604a95406e95dea7ba0ace62d11&format=json`)
        .then(res => {
          const nvTopArtist = res.data;
          this.setState({ trendArt: nvTopArtist});
        });
    }
 
    componentDidMount()
    {
      this.gettrend();
    }
 
    render=()=>
    {
        return(

            <div className="card">
            <div className="card-body">
            <div className="Widget">
                <center><button onClick={()=>this.gettrend()} className ="btnRefresh"><h5>LastFM - Tendances</h5></button></center>
                <hr></hr>
                <div>
                    <center><h6>Artistes les plus écoutés en ce moment :</h6></center>
                    {!!this.state.trendArt && (<>
                    <div className="morceau">
                        <p className="informationMorceau">1 : {this.state.trendArt.artists.artist[0].name} </p>
                        <p className="informationMorceau">{this.state.trendArt.artists.artist[0].playcount} écoutes</p>
                    </div>
                    <div className="morceau">
                        <p className="informationMorceau">2 : {this.state.trendArt.artists.artist[1].name} </p>
                        <p className="informationMorceau">{this.state.trendArt.artists.artist[1].playcount} écoutes</p>
                    </div>
                    <div className="morceau">
                        <p className="informationMorceau">3 : {this.state.trendArt.artists.artist[2].name} </p>
                        <p className="informationMorceau">{this.state.trendArt.artists.artist[3].playcount} écoutes</p>
                    </div>
                    <div className="morceau">
                        <p className="informationMorceau">4 : {this.state.trendArt.artists.artist[4].name} </p>
                        <p className="informationMorceau">{this.state.trendArt.artists.artist[4].playcount} écoutes</p>
                    </div>
                    <div className="morceau">
                        <p className="informationMorceau">5 : {this.state.trendArt.artists.artist[5].name} </p>
                        <p className="informationMorceau">{this.state.trendArt.artists.artist[5].playcount} écoutes</p>
                    </div>
                    </>)}
                </div>
                <hr></hr>
                <div>
                    <center><h6>Titres les plus écoutés en ce moment :</h6></center>
                    {!!this.state.trendTitle && (<>
                    <div className="morceau">
                        <p className="informationMorceau">1 : {this.state.trendTitle.tracks.track[0].name} de {this.state.trendTitle.tracks.track[0].artist.name} </p>
                        <p className="informationMorceau">{this.state.trendTitle.tracks.track[0].playcount} écoutes</p>
                    </div>
                    <div className="morceau">
                        <p className="informationMorceau">2 : {this.state.trendTitle.tracks.track[1].name} de {this.state.trendTitle.tracks.track[1].artist.name} </p>
                        <p className="informationMorceau">{this.state.trendTitle.tracks.track[1].playcount} écoutes</p>
                    </div>
                    <div className="morceau">
                        <p className="informationMorceau">3 : {this.state.trendTitle.tracks.track[2].name} de {this.state.trendTitle.tracks.track[2].artist.name} </p>
                        <p className="informationMorceau">{this.state.trendTitle.tracks.track[2].playcount} écoutes</p>
                    </div>
                    <div className="morceau">
                        <p className="informationMorceau">4 : {this.state.trendTitle.tracks.track[3].name} de {this.state.trendTitle.tracks.track[3].artist.name} </p>
                        <p className="informationMorceau">{this.state.trendTitle.tracks.track[3].playcount} écoutes</p>
                    </div>
                    <div className="morceau">
                        <p className="informationMorceau">5 : {this.state.trendTitle.tracks.track[4].name} de {this.state.trendTitle.tracks.track[4].artist.name} </p>
                        <p className="informationMorceau">{this.state.trendTitle.tracks.track[4].playcount} écoutes</p>
                    </div>
                    </>)}
                </div>
            </div>
            </div>
            </div>
        );
    }
}
 
export default Test2;