import React, { useState } from 'react'
import { Button, Paper, TextField } from "@mui/material"

const form = ({addtodo}) => {
  const [text, setText] = useState(null);   
  const [id, setId] = useState(0);

  const todoObjCreate = (text) =>{
    const todoObj = {text: text, id: id}
    setId(id + 1);
    addtodo(todoObj);
    document.getElementById("outlined-basic").value = null;

  }

  return (

    <div>
      <Paper>
        <TextField id="outlined-basic" label="Outlined" onChange={(e)=>setText(e.target.value)} variant="outlined" />
        <Button variant="text" onClick={()=> todoObjCreate(text)} >ADD</Button>
      </Paper>


    </div>
  )
}

export default form