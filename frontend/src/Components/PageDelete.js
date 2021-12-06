import React from 'react';
import axios from 'axios';
 
class PageDelete extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            id: '',
        }         
    }
 
    upId(e)
    {
      this.setState({id: e.target.value})
    }
 
    requete()
    {
        const souvenir = {
            id: this.state.id,
        };
 
        axios.post('http://localhost:3000/souvenir/supprimer', souvenir)
            .then(console.log("test"))
            .catch((err) => {
                console.log(err);
              }) 
    }
 
    render=()=>
    {
        return(
            <div className="card">
            <div className="card-body">
            <div className="Formulaire">
                <div className="pageAjout">
                    <center>
                        <div className="champAjout">
                            <h1  className="couleurTitre">Supprimer un souvenir</h1>
                            <input type="text" className="inputAdmin" value = {this.state.id} onChange={(e)=>this.upId(e)} placeholder="Entrer l'id de l'élément à supprimer'"></input>
                        </div>
                        <div className="champAjout">
                            <button className="boutonAdmin" onClick={()=>this.requete()}>Supprimer</button> 
                        </div> 
                    </center>  
                </div>  
                </div>
                </div>              
            </div>
        );
    }
}
 
export default PageDelete;