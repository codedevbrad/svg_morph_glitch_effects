
import React, { Fragment , useState , useEffect } from 'react';

const Movement = ( props ) => {

    const className = props.class;
    const toPush    = parseInt(props.push) || 5;
    var oldx = 0,
        oldy = 0,
        coordinates = [ ];

        const translateImage = ( e ) => {

           e.pageX < oldx ? coordinates[0] = toPush : coordinates[0] = -toPush;
           e.pageY < oldy ? coordinates[1] = toPush : coordinates[1] = -toPush;

           oldx = e.pageX;
           oldy = e.pageY;

           const xTranslate = coordinates[0] + 'px';
           const yTranslate = coordinates[1] + 'px';
           e.target.style.transform = "translate(" + xTranslate + "," + yTranslate + ")";
           console.log( toPush );
        }

    return (
       <div className={ className } onMouseMove={ e => translateImage( e ) }>
          { props.children }
       </div>
    )
}


export default Movement;
