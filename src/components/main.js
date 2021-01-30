import React, { Fragment , useState , useEffect } from 'react';

import { useStore , useActions } from 'easy-peasy';
import './main.scss';

import elements from './exports/elements';
import anime    from 'animejs';

import ReactMovement from '@codedevbrad/react_movement';

const ImageCanvas = ( props ) => {

  useEffect( ( ) => {

    const test = ( ) => {
          var canvas = document.getElementById( 'canvas-' + props.id );
          var ctx = canvas.getContext('2d');

          var img = new Image();

          img.onload = function( ) {
            canvas.width = img.naturalWidth
            canvas.height = img.naturalHeight
            ctx.drawImage(img, 0, 0);
          }
          img.src = props.image;
      }
      test();
      // eslint-disable-next-line
  }, []);

  return (
      <ReactMovement class={"image_canvas_contain"}>
          <canvas className="image_canvas" id={ 'canvas-' + props.id }> </canvas>
      </ReactMovement>
   )
}


const ExploreMore = (  props ) => {

    return (
        <div>
            <section>


            </section>
        </div>
    )
}


const MorphSquares = ( ) => {

      const renderExplore = ( element ) => {

      }

      return (
         <Fragment>
              { elements.map( ( element , index ) =>
               <div key={ index } className="squares_container">
                    <div className="square_first">
                       <div key={ index } className="squares_individual">
                            <ImageCanvas key={ index } id={ index } image={ element.elementImg }/>
                            <h2 onClick={ e => renderExplore( e ) }> { element.title } </h2>
                       </div>
                    </div>

                    <div className="square_second" id={ `square1-` + index }>

                    </div>

                    <div className="square_third" id={ `square2-` + index }>

                    </div>
               </div>
             )}
         </Fragment>
      )
}


const Svg = ( ) => {

      return (
        <Fragment>
            <svg id="morphing_element" width="375" viewBox="0 0 265 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="circle"
                      d={ elements[0].morph }
                    fill="#02023e"/>
            </svg>
        </Fragment>
      )
}

const Loading = ( ) => {
    return (
      <div>

       </div>
    )
}


const MainApp = ( ) => {

     const loading  = useStore(   state => state.loadingFirst );
     const isLoaded = useActions( actions => actions.isLoaded );
     const chosenPiece = useStore( state => state.chosenPiece );

     var positions = [ ];

     var resetNew = ( ) => {
          for ( let i = 0; i < positions.length; i++ ) {
              positions[ i ].newElement = true;
          }
     }

     var svgAnimate = ( morph ) => {
         anime({
              duration : 1000 ,
              easing : "easeOutExpo" ,
              targets : ".circle" ,
              d : [ { value : morph } ]
          });
     }

     var handleScroll = ( arr ) => {
          // add positions to array once.
          var scrollY = Math.round( window.pageYOffset );
          var lastEl = null;


           // if this element is same as last element , ignore the forEach loop.

           // do not trigger if last element is set. because array of positons   will be set.
           if ( positions.length == 0 ) {
              var each = document.getElementsByClassName('squares_individual');
              Array.from( each ).forEach( ( el ) => positions.push( { element : el.parentNode , newElement: true } ));
          }

          if ( scrollY == positions[ positions.length - 1 ].element.offsetTop ) {
               resetNew();
               positions[ positions.length - 1 ].newElement = false;
               svgAnimate( elements[ positions.length - 1 ].morph );

          } else {
            positions.forEach( ( each , position ) => {
                // on each scroll, we looop through array to find elements
                if ( scrollY >= each.element.offsetTop && scrollY < positions[ position + 1 ].element.offsetTop && each.newElement ) {
                    console.log( each.element );
                    resetNew();
                    positions[ position ].newElement = false;
                    svgAnimate( elements[ position ].morph );
                }
            });
          }
     }

     useEffect( ( ) => {
         setTimeout( () => {
             isLoaded();
         } , 1700 );
         window.addEventListener('scroll', e => handleScroll() , true );
         // eslint-disable-next-line
     }, []);

    return (
      <div className="main">
          { !loading ? (
            <Loading />
          ) : (
            <Fragment>
                <Svg/>
                <MorphSquares />
            </Fragment>
          )}

          { chosenPiece &&
            <ExploreMore />
          }
      </div>
    );
}

export default MainApp;
