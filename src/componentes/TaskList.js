import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Task from './Task';
import TaskForm from './TaskForm';
//import axios from '../config/axios'
import firebase from '../config/firebase'
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore'

function Boton({ owner }) {
  const [taskList, setTaskList] = useState([]);
  const [taskEdit, setTaskEdit] = useState({})
  const firebaseDB = getFirestore(firebase)

  useEffect(() => {
//    axios.get("todos?_start=100&_limit=10")
//       .then((res) => 
//        //console.log(res)
//        setTaskList(res.data)
//      )

getTodos(firebaseDB)
    .then( (res) => setTaskList(res))

  }, [])


  const getTodos = async (db) => {
    const todosCol = collection(db, 'todos')
    const todosCursor = await getDocs(todosCol)
    const todoList = todosCursor.docs.map(doc => doc.data())

    return todoList
  }

  const addTask = (task) => {
    let tasks = [...taskList]

    if(!task.id)
      task.id = Math.floor(Math.random()*10000)
    setDoc(doc(firebaseDB, "todos", task.id+""), task)
          .then( () => {
            getTodos(firebaseDB)
              .then( (res) => setTaskList(res))
          })
  //    tasks.push(task)

  //  }else{
  //    let index = tasks.findIndex( taskItem => taskItem.id === task.id)
  //    tasks[index] = task
  //    setTaskEdit({})
    
    //tasks.push(task)
    //setTaskList(tasks)
  }
  const delTask = (task) => {
    let tasks = [...taskList]
    let index = tasks.findIndex( taskItem => taskItem.id === task.id)
    tasks.splice(index, 1)
    setTaskList(tasks)
  }
  const editTask = (task) => {
    setTaskEdit(task)

  }
  const renderTask = () => {
    return taskList.map(task => <Task task={task} key={task.id} delTask={delTask} editTask={editTask}/>)
  }

  return (
    <div>
      <h1>Lista de tareas</h1>
      <TaskForm addTask={addTask} task={taskEdit}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600, maxWidth: 700, m: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Titulo</TableCell>
              <TableCell align="right">Completado</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTask()}
          </TableBody>
        </Table>
      </TableContainer>
    </div >
  );

}



export default Boton;
