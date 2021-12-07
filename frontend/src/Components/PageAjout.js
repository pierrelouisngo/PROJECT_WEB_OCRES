import React from 'react';
import axios from 'axios';
 
class PageAjout extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            annee: '',
            mois: '',
            jour: '',
            titre: '',
            description :'',
            matiere: '',
            type: '',   
        }         
    }
 
    
    upAnnee(e)
    {
      this.setState({annee: e.target.value})
    }
    upMois(e)
    {
      this.setState({mois: e.target.value})
    }
    upJour(e)
    {
      this.setState({jour: e.target.value})
    }
    
    upTitre(e)
    {
      this.setState({titre: e.target.value})
    } 
    upDescription(e)
    {
      this.setState({description: e.target.value})
    }
    upType(e)
    {
      this.setState({type: e.target.value})
    }
 
    requete()
    {
        const souvenir = {
            annee: this.state.annee,
            mois: this.state.mois,
            jour: this.state.jour, 
            titre: this.state.titre,
            description: this.state.description,
            type: this.state.type
        };
 
        axios.post('http://localhost:3000/souvenir/ajout', souvenir)
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
                            <h1 className="couleurTitre">Ajouter un souvenir</h1>                            
                        </div>
 
                        <div className="champAjout">
                            <input type="text" className="inputAdmin" value = {this.state.jour} onChange={(e)=>this.upJour(e)} placeholder="Entrer le Jour"></input>
                        </div>
 
                        <div className="champAjout">
                            <input type="text" className="inputAdmin" value = {this.state.mois} onChange={(e)=>this.upMois(e)} placeholder="Entrer le Mois"></input>
                        </div>
 
                        <div className="champAjout">
                            <input type="text" className="inputAdmin" value = {this.state.annee} onChange={(e)=>this.upAnnee(e)} placeholder="Entrer l'Année"></input>
                        </div>
 
                        <div className="champAjout">
                            <input type="text" className="inputAdmin" value = {this.state.titre} onChange={(e)=>this.upTitre(e)} placeholder="Entrer le Titre"></input>
                        </div>
                        <div className="champAjout">
                            <textarea className="inputAdmin2" value = {this.state.description} onChange={(e)=>this.upDescription(e)} placeholder="Entrer la Description de l'évènement"></textarea>
                        </div>
 
                        <div className="typeSouvenir">
                            <button className="boutonAdmin" value = "Concert" onClick={(e)=>this.upType(e)}>Concert</button>
                            <button className="boutonAdmin" value = "Souvenir" onClick={(e)=>this.upType(e)}>Souvenir</button>
                            <button className="boutonAdmin" value = "Sortie" onClick={(e)=>this.upType(e)}> Sortie</button>
                        </div>
                        <div className="champAjout">
                            <button className="boutonAdmin" onClick={()=>this.requete()}>Ajouter</button> 
                        </div> 
                    </center>  
                </div>                
            </div>
            </div>
            </div>
        );
    }
}
 
export default PageAjout;