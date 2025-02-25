import './App.css'
import React, { useState } from 'react'
import Form from './componets/Form'
import TodoItem from './componets/Todoitem'
import { Container, List } from "@mui/material"

function App() {
  const [todos, setTodos] = useState([]);

  const addtodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  }

  const editTodo = (id, editText) =>{
    var todosChange = [...todos]
    for(var i in todosChange){
      if (todosChange[i].id == id){
        todosChange[i].text = editText;
      } 
    }
    setTodos(todosChange);

  }


  return (
    <>
      <Container maxWidth="xs">
        <Form addtodo={addtodo}/>
          <List sx={{ bgcolor: 'background.paper', marginTop: "1em" }}>
            {todos.map((todo) => (
              <div key={todo.id}>
                  <TodoItem todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
              </div>))}
              
          </List>
      </Container>
    </>
  )
}

export default App
