import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'; 
// import Menu from './components/MenuComponent'
// import {Routers, Router} from 'react-router-dom'
import Home from './components/Home'
import News from './components/News'
import Contact from './components/Contact';

import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className = 'container'>
            <NavbarBrand href="/"> Ristorante Con Fusion  </NavbarBrand>
          </div> 
        </Navbar>
        
       <div className='container'>
       tuấn
       <Home/>

        </div>
        
      
      </div>
    );
  }
}

export default App;

