import React from 'react'
import './App.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
