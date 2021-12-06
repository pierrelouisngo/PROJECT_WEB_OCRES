import React, { useState }  from 'react'

export const Widget4= ()=> {

    var [name,setName]=useState()
    
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
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
                description:"test du post"
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('Success! Check your database ! ');
        })
    }

    return (
        <div className="card" >
            <div className="card-body">
            <h5>Add data &#10133; </h5>
            <form onSubmit={handleSubmit}>
                <label>Enter a title:</label>
                <input required onChange={nameUpdate}></input>
                <button type="submit"> Submit</button>
            </form>
            </div>
        </div>
    )
    
}

export default Widget4;