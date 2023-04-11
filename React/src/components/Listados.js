import React from 'react';
import ListadoContrataciones from './ListadoContrataciones';
import ListadoProductos from './ListadoProductos';
import ListadoSiniestros from './ListadoSiniestros';
import {Route,  Switch} from 'react-router-dom';

function Listados(){
    return(

        <Switch>
        <Route path="/listadoproductos" component = {ListadoProductos} />
        <Route path= "/listadocontrataciones" component = {ListadoContrataciones}/>
        <Route path= "/listadosiniestros" component = {ListadoSiniestros} />
        </Switch>

    )
}
export default Listados;
