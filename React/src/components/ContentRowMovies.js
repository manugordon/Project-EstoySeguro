import React from 'react';

import SmallCard from './Resumen';

function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                
             <SmallCard />
            }     

        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;