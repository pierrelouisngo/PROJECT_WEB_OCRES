import axios from "axios";
import React, { useRef, useState } from "react";

function Widget5() {

    const [id, setId] = useState('');


    const handleInputRemove = () => {
        axios
            .delete(`http://localhost:3001/index/${id}`)
            .catch(console.error);
        alert('Souvenir supprimé avec succès ! ');
        document.location.reload(true);
    }


    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <h5>Supprimer un souvenir &#10060;</h5>
                    <input placeholder="id du souvenir à supprimer" onChange={e => setId(e.target.value)} />
                    <br/>
                    <br/>
                    <button onClick={() => handleInputRemove()} class="btn btn-danger">Supprimer</button>
                </div>
            </div>
        </div>

    );
}

export default Widget5;