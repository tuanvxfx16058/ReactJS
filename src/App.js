import React, { Component } from 'react';
import { Route, Router, Routes   } from 'react-router-dom'
import Contac from '../pages/Contac';
import Home from '../pages/Home';
import News from '../pages/News';
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/News'>News</a>
            </li>
            <li>
              <a href='/Contact'>Contact</a>
            </li>
          </ul>
          <Routes>
        <Route path='/' element = {Home}></Route>
        <Route path='/News' element = {News}></Route>

        <Route path='/contac' element = {Contac}></Route>

</Routes>
      </div>


    );
  }
}

export default App;