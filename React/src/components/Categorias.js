import React from 'react';
import { useState, useEffect } from 'react';

function Categorias(){

    const [categorias, setCategorias] = useState([]);

    useEffect (()=> {
        fetch("http://localhost:3001/apip/alltipes")
        .then(response => response.json())
        .then (data => {
            setCategorias(data.data)
        })
    }, [])

    return(
        <React.Fragment>
                {
                    categorias.map ((seguro, i) =>{
                        return (
                        <div className="col-lg-6 mb-4">
                            <div className="card text-white bg-dark shadow">
                                <div className="card-body">
                                   <p> {seguro.nombre} ({seguro.cantidad}) </p>
                                </div>
                            </div>
                        </div>
                        )
                   })
             }
        </React.Fragment>
    )
}
export default Categorias;

