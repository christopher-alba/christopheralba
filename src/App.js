import './App.css';
import { Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import Homepage from './Pages/Homepage';
import Portfolio from './Pages/Portfolio';
import NavbarMain from './Components/Navbar';
const App = () => {
  return (
    <Fragment>
      <Route
        path="/"
        render={(props) => <NavbarMain pathName={props.location.pathname} />}
      />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/portfolio" component={Portfolio} />
    </Fragment>
  );
};

export default App;
