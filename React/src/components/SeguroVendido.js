import React from "react";
import { useEffect, useState } from "react";



function  SeguroVendido (){

    const [seguro, setSeguros] = useState ([]);

    useEffect (()=>{
        fetch ("http://localhost:3001/apiup/most")
        .then(response => response.json())
        .then (data =>{
            setSeguros(data.data)
        })
    },[])

    
    return(
        <React.Fragment>
        <div className="col-lg-6 mb-4">
	    <div className="card shadow mb-4">
		<div className="card-header py-3">
			<h5 className="m-0 font-weight-bold text-gray-800">Seguro mas Vendido</h5>
            <p> {seguro.nombre} </p>
		</div>
		<div className="card-body">
			    <p>{seguro.descripcion} </p>
		</div>
	</div>
</div>
</React.Fragment>
    )
}

export default SeguroVendido;

