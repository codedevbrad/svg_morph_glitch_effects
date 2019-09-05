
import { action , thunk } from 'easy-peasy';

export default {

      loadingFirst : false ,
      chosenPiece : null ,
      svgShow : true ,

      isLoaded: action( ( state , boolean ) => {
            state.loadingFirst = true;
      }),

      updateChosenPiece: action(( state , chosen )  => {
            state.chosenPiece = chosen;
      })
};
