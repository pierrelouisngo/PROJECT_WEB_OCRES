import axios from "axios";
import React, { useRef, useState } from "react";

// WIDGET QUI PERMET DE MODIFIER LES DONNEES DE LA BDD 

function Widget9() {

const[id,setId]=useState('');
const[titre,setTitre]=useState('');
const[description,setDescription]=useState('');
const [date,setDate]=useState('');
const [type,setType]=useState('');

const titreUpdate=(event)=>{
    setTitre(event.target.value)
}

 
const descriptionUpdate=(event)=>{ 
    setDescription(event.target.value)
}

const dateUpdate=(event)=>{ 
    setDate(event.target.value)
}


const typeUpdate=(event)=>{ 
    setType(event.target.value)
}



const handleInputUpdate = () => {
    let donnees = {
        "title": titre,
        "description": description,
        "datedupost": date,
        "type":type
    };
    console.log(donnees);

    // APPEL DE LA ROUTE PATCH DEFINIE DANS INDEX.JS 
    axios
        .patch(`http://localhost:3001/index/${id}`, donnees)
        .catch(console.error);
        alert("Modification réussie");
    document.location.reload(true);
};

// AFFICHAGE
  return (
    <div className="card">
    <div className="card-body">
      <div>
          <h5>Modifier les souvenirs &#9999; </h5>
          <input placeholder="id" onChange={e=>setId(e.target.value)}/>
          <input placeholder="titre" onChange={titreUpdate}/>
          <input placeholder="description" onChange={descriptionUpdate}/>
          <input placeholder="date" onChange={dateUpdate}/>
          <input placeholder="type" onChange={typeUpdate}/>
          <br/>
          <br/> 
         <button class="btn btn-primary" onClick={()=>handleInputUpdate()}>Modifier</button> 
      </div>
      </div>
      </div>
  
  );
}

export default Widget9;