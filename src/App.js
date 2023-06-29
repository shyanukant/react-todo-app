import React, { useState } from "react";
import './app.css';
let globalId = 0

function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  function createTodo(event) {
    event.preventDefault() // off auto refresh property of HTML form tag
      setTodos(oldTodos => {
      setTask("")
      return [...oldTodos, { todo: task, id: globalId++ }]
    })
  }

  function deleteTodo(itemId) {

    setTodos(oldTodos => oldTodos.filter(item => item.id !== itemId))

  }

  function editTodo(itemId){
    for (let item of todos){
      if(item.id === itemId){
        setTask(item.todo)
        deleteTodo(itemId)
      }
    }
  }

  // function createTodoWithEnterKey(e){
  //   // console.log(e)
  //   if (e.keyCode === 13){
  //     createTodo()
  //   }
  // }

  return (
    <div className="container">
      <h1>Todo App </h1>
      {/* <input 
        type="text" 
        value={task}
        onKeyDown={createTodoWithEnterKey}
        onChange={e => {setTask(e.target.value)}}/>

      <button 
        onClick={createTodo}>
          Create Todo
      </button> */}

      {/* html form tag has default enter button action  */}

      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={e => {
            setTask(e.target.value)
          }} />

        <button type="submit">Create Todo</button>
      </form>

      <ul>{todos.map((item, index) => {
        return <div key={item.id}  className="container-r">
          <li>{item.todo}{item.id}</li>

          <button
            type="submit"
            onClick={() => deleteTodo(item.id)}>
            Delete
          </button>

          <button
            onClick={() => editTodo(item.id) }>
            Edit</button>
        </div>
      })}
      </ul>
    </div>
  );
}

export default App;
