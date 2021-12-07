import axios from "axios";
import React, { useRef, useState } from "react";

function Widget5() {

const[id,setId]=useState('');


const handleInputRemove= () => {
    axios
    .delete(`http://localhost:3001/index/${id}`)
    .catch(console.error);
    document.location.reload(true);
}



  
  return (
      <div>
          <input placeholder="id" onChange={e=>setId(e.target.value)}/>
         <button onClick={()=>handleInputRemove()}>Delete</button>  
      </div>
  
  );
}

export default Widget5;