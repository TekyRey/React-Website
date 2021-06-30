import React from 'react'
import './App.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path ="/" exact component ={Home}/>
          <Route path ="/menu" exact component ={Menu}/>
          <Route path ="/about" exact component ={About}/>
          <Route path ="/contact" exact component ={Contact}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
