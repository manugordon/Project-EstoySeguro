import React from 'react';
import { useEffect, useState } from 'react';


function ListadoContrataciones(){

const [seguros, setSeguros] = useState ([]);

useEffect (()=> {
	fetch ("http://localhost:3001/apiup/listall")
	.then (response => response.json())
	.then(data => {
		setSeguros(data.data)
	})
}
, [])



    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Ultimas contrataciones</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Usuario_Id</th>
                                            <th>Seguro</th>
                                            <th>Fecha de Contratacion</th>
                                            <th>Fecha de Vencimiento</th>
                                            
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Usuario_ Id</th>
                                            <th>Seguro</th>
                                            <th>Fecha de Contratacion</th>
                                            <th>Fecha de Vencimiento</th>
                                            
										</tr>
									</tfoot>
									<tbody>
										{ seguros.length === 0 && <p>Cargando</p>}
										{
											seguros.map((seguro,i) => {
												return (
													<tr>
													
													<td> {seguro.usuario_id} </td>
													<td> {seguro.seguro.nombre}</td>
													<td> {seguro.fecha_contratacion} </td>
													<td> {seguro.fecha_vencimiento} </td>
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
export default ListadoContrataciones;