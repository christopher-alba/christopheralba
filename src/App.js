import './App.css';
import { Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import Homepage from './Pages/Homepage';
import Portfolio from './Pages/Portfolio';
const App = () => {
  return (
    <Fragment>
      <Route exact path="/christopheralba" component={Homepage} />
      <Route exact path="/christopheralba/portfolio" component={Portfolio} />
    </Fragment>
  );
};

export default App;
