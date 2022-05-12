// import React, { Component } from 'react';
import React from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConfigureStore } from './redux/configStore'
import './App.css';


const store = ConfigureStore();


export default function App(){
  return(
    <Provider store={store}>
   <BrowserRouter>
   <Main/>
   </BrowserRouter>
   </Provider>
  )

}
