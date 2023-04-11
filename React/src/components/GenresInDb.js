import React from 'react';
import Categorias  from './Categorias';

function GenresInDb(){
    
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="row-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Tipos de Seguro</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    < Categorias />
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )
}
export default GenresInDb;