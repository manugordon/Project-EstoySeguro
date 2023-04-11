import React from 'react';
import { useEffect, useState } from 'react';


function ListadoProductos(){

const [seguros, setSeguros] = useState ([]);

useEffect (()=> {
	fetch ("http://localhost:3001/apip/listall")
	.then (response => response.json())
	.then(data => {
		setSeguros(data.data)
	})
}
, [])

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Listado de Productos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Seguro</th>
                                            <th>Descripcion</th>
                                            <th>Categoria</th>
                                            <th>Precio</th>
                                            
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Usuario_ Id</th>
                                            <th>Seguro</th>
                                            <th>Categoria</th>
                                            <th>Precio</th>
                                            
										</tr>
									</tfoot>
									<tbody>
										{ seguros.length === 0 && <p>Cargando</p>}
										{
											seguros.map((seguro,i) => {
												return (
													<tr>
													<td> {seguro.id} </td>
													<td> {seguro.nombre} </td>
													<td> {seguro.descripcion}</td>
													<td> {seguro.categoria_id} </td>
													<td> {seguro.precio} </td>
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
export default ListadoProductos;