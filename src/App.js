import React, { useEffect, useState } from 'react'
import './App.css';
import AllCharacter from './Components/AllCharacter';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
   return (
      <BrowserRouter>
         <div className="caracter_wrapper">
            <h1 className="title">Rick And Morty React WiKi APP</h1>
            <AllCharacter></AllCharacter>
         </div>
      </BrowserRouter>
   )
}

export default App;
