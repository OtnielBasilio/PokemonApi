import './App.css';
import React from 'react';
import Pokedex from './components/Pokedex';
import Inicio from './components/Inicio';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom";

//Cambiar Pokedex por Inicio

function App() {
  return (
    <div className="App">
      <Pokedex/>
    </div>
  );
}

export default App;
