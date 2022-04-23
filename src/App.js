// import React, { Component } from 'react';
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Home from "./components/Home";
import News from "./components/News";
import Contact from "./components/Contact";

// import Menu from './components/MenuComponent'
// import {Routers, Router} from 'react-router-dom'

// import { func } from 'prop-types';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand> Ristorante Con Fusion </NavbarBrand>
        </div>
      </Navbar>
      <div className="container">
        <ul>
          <li>
            <a href="/Home">
              <Home />
            </a>
          </li>
          <li>
            <a href="/News">
              <News />
            </a>
          </li>
          <li>
            <a href="/Contact">
              <Contact />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default App;

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color='primary'>
//           <div className = 'container'>
//             <NavbarBrand href="/"> Ristorante Con Fusion  </NavbarBrand>
//           </div>
//         </Navbar>

//        <div className='container'>
//        tuấn
//        <Home/>

//         </div>

//       </div>
//     );
//   }
// }
