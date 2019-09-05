import React, { Fragment } from 'react';
import AppMain from './components/main';

import { StoreProvider , createStore } from 'easy-peasy';
import model from './components/model';

import './css_app/normalise.css';
import './css_app/App.scss';

const App = () => {

    const store = createStore( model );

    return (
      <StoreProvider store={ store }>
        <div className="App">
          <AppMain />
        </div>
      </StoreProvider >
    );
}

export default App;
