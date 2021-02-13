import './App.css';
import { Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';

const App = () => {
  return <Route exact path="/" component={Homepage}/>
};

export default App;
