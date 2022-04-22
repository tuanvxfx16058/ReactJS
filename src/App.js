import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'; 
import Menu from './components/MenuComponent'
import Home from '../pages/Home';
import News from '../pages/News';
import Contact from '../pages/Contact';

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
        
        <React.Fragment>
<ul>
  <li><Home/></li>
  <li><News/></li>

  <li><Contact/></li>

</ul>

        </React.Fragment>
        
        <Menu/>
      </div>
    );
  }
}

export default App;

