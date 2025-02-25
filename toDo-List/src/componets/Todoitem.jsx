import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import EditTodoDialog from './EditTodoDialog';



export default function Todoitem({todo, deleteTodo, editTodo}) {
  const [openDialog, setOpenDialog] = React.useState (false);

  const dialogHandle = () => {
    setOpenDialog(!openDialog);
  }
 
  return (
    <ListItem
    secondaryAction={
      <>
        <EditTodoDialog open={openDialog} editTodo={editTodo}  dialogHandle={dialogHandle} todo={todo} />
        <IconButton edge="end" aria-label="comments">
          <DeleteOutlineSharpIcon onClick={()=> deleteTodo(todo.id)} style={{ marginRight : "3px"}} />
        
        </IconButton>
        
      </>
    }
    disablePadding
  >
    <ListItemButton role={undefined} dense>
      <ListItemIcon>
        <Checkbox edge="start" tabIndex={-1} disableRipple/>
      </ListItemIcon>
      <ListItemText primary={todo.text} onClick={()=>{setOpenDialog(true)}} />
    </ListItemButton>
  </ListItem>
  );
}
