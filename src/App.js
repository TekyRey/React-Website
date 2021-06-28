import React from 'react'
import './App.css';
import NavBar from './Components/NavBar'
import Home from './pages/Home'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path ="/" exact component ={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
