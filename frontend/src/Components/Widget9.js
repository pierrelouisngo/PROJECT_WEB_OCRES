import axios from "axios";
import React, { useRef, useState } from "react";

function Widget9() {

const[id,setId]=useState('');
const[titre,setTitre]=useState('');
const[description,setDescription]=useState('');
const [date,setDate]=useState('');
const [type,setType]=useState('');


const handleInputUpdate = () => {
    let donnees = {
        "title": titre,
        "description": description,
        "datedupost": date,
        "type":type
    };


    axios
        .patch(`http://localhost:3001/index/${id}`, donnees)
        .catch(console.error);
        alert("Modification réussie");
    document.location.reload(true);
};

  return (
    <div className="card">
    <div className="card-body">
      <div>
          <h5>Modifier les souvenirs &#9999; </h5>
          <input placeholder="id" onChange={e=>setId(e.target.value)}/>
          <input placeholder="titre" onChange={e=>setTitre(e.target.value)}/>
          <input placeholder="description" onChange={e=>setDescription(e.target.value)}/>
          <input placeholder="date" onChange={e=>setDate(e.target.value)}/>
          <input placeholder="type" onChange={e=>setType(e.target.value)}/>
         <button onClick={()=>handleInputUpdate()}>Modifier</button> 
      </div>
      </div>
      </div>
  
  );
}

export default Widget9;