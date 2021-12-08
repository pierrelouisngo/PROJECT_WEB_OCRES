import React, { useState }  from 'react'

export const Widget4= ()=> {

    var [name,setName]=useState()
    var [description,setDescription]=useState()
    var [date,setDate]=useState()
    var [type,setType]=useState()
    
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
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


    const handleSubmit=()=> { 
        const postURL = "http://localhost:3001/index/" 
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                title: name,
                description:description,
                datedupost:date,
                type:type
            })
        })
        .then(()=>{
           
            alert('Ajouté avec succès ! ');
        })
    }

    return (
    
<div className="card">
<div className="card-body">
<form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="Input1">Souvenir</label>
    <input required onChange={nameUpdate} type="text" class="form-control" id="Input1" placeholder="Souvenir"/>
  </div>
  <div class="form-group">
    <label for="Input2">Description</label>
    <input required onChange={descriptionUpdate} type="text" class="form-control" id="Input2" placeholder="Description"/>
  </div>
  <div class="form-group">
    <label for="Input3">Date</label>
    <input required onChange={dateUpdate} type="text" class="form-control" id="Input2" placeholder="JJ/MM/AA"/>
  </div>
  <div class="form-group">
    <label for="Input4">Type de souvenir</label>
    <input required onChange={typeUpdate} type="text" class="form-control" id="Input2" placeholder="Concert-Voyage-Sortie.."/>
  </div>
  <br/>
  <button type="submit" class="btn btn-success">Ajouter</button>
</form>
</div>
</div>
    )
    
}

export default Widget4;