import React, { useState }  from 'react'

export const Widget4= ()=> {

    var [name,setName]=useState()
    var [description,setDescription]=useState()
    
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
    }

     
    const descriptionUpdate=(event)=>{ // Dealing with name field changes to update our state
        setDescription(event.target.value)
    }
    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:3001/index/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                title: name,
                description:description
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('Success! Check your database ! ');
        })
    }

    return (
    
<div className="card">
<div className="card-body">
<form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="Input1">Devoir</label>
    <input required onChange={nameUpdate} type="text" class="form-control" id="Input1" placeholder="Devoir"/>
  </div>
  <div class="form-group">
    <label for="Input2">Description du devoir</label>
    <input required onChange={descriptionUpdate} type="text" class="form-control" id="Input2" placeholder="Description"/>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary">Soumettre</button>
</form>
</div>
</div>
    )
    
}

export default Widget4;