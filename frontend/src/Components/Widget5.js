import React, { useState }  from 'react'


export const Widget5= ()=> {

    var [name,setName]=useState()
    
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
    }

    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = `https://rest.bandsintown.com/artists/${this.state.searchValue}/?app_id=0ca0cf2b477cf81859c0a0e548b04dd3` 
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
       <h5>Add data &#10133; </h5> 
        <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="example1">Title</label>
    <input required onChange={nameUpdate} type="text" class="form-control" id="text1" placeholder="Enter title"/>
  </div>
  <div class="form-group">
    <label for="example2">Description</label>
    <input required onChange={descriptionUpdate} type="text" class="form-control" id="text2" placeholder="Enter description"/>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
       
    )
    
}

export default Widget5;