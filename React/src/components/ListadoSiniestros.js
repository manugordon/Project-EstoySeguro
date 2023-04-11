import React from 'react';
import { useEffect, useState } from 'react';


function ListadoSiniestros(){

const [seguros, setSeguros] = useState ([]);

useEffect (()=> {
	fetch ("http://localhost:3001/apis/listall")
	.then (response => response.json())
	.then(data => {
		setSeguros(data.data)
	})
}
, [])

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Listado de Siniestros</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Usuario_Id</th>
                                            <th>Detalle</th>
                                            <th>Lugar</th>
                                            <th>Monto Estimado</th>
                                            
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Usuario_ Id</th>
                                            <th>Detalle</th>
                                            <th>Lugar</th>
                                            <th>Monto Estimado</th>
                                            
										</tr>
									</tfoot>
									<tbody>
										{ seguros.length === 0 && <p>Cargando</p>}
										{
											seguros.map((seguro,i) => {
												return (
													<tr>
													<td> {seguro.id} </td>
													<td> {seguro.email} </td>
													<td> {seguro.detalle}</td>
													<td> {seguro.lugar} </td>
													<td> {seguro.monto} </td>
												</tr>
												)
											})
										}
									
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default ListadoSiniestros;