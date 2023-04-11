import React from 'react';
import { useEffect, useState } from 'react';

function Resumen(){

const [cantidad1, setCantidad1] = useState ([])

 
 useEffect(()=>{
    fetch ("http://localhost:3001/apiu/listall")
    .then (response =>response.json())
    .then (data => {
        setCantidad1(data.data)
    })
} , []);
 
const [cantidad2, setCantidad2] = useState ([])
    useEffect(()=>{
    fetch ("http://localhost:3001/apip/listall")
    .then (response =>response.json())
    .then (data => {
        setCantidad2(data.data)
    })
} , []);
        
const [cantidad3, setCantidad3] = useState ([])
    useEffect(()=>{
        fetch ("http://localhost:3001/apiup/listall")
        .then (response =>response.json())
        .then (data => {
            setCantidad3(data.data)
        })
} , []);

    return(
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-warning shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-warning text-uppercase mb-1`}> Cantidad de Usuarios </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidad1.length}</div>
                            </div>
                            <div className="col-auto">
                            <i className={`fas fas fa-car fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-warning shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-warning  text-uppercase mb-1`}> Cantidad de Seguros </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidad2.length}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fas fa-user fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-warning shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-warning text-uppercase mb-1`}> Cantidad de Polizas </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidad3.length}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fas fa-heart fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Resumen