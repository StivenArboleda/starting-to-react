
import './App.css';
import TaskList from './componentes/TaskList';
import TaskHandler from './componentes/TaskHandler';
import React, { useState, useEffect } from "react";

function App() {

  let owner = {nombre: "Stiven", apellido: "Bustamante"}

  return (
    <div className='App'>

      <TaskList owner={owner}/>
    </div>


  );


}



export default App;

