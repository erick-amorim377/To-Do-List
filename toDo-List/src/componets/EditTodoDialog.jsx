import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({open, dialogHandle, todo, editTodo}) {

  const [editText, setEditText] = React.useState(todo.text)

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandle}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Editar tarefa"}</DialogTitle>
        <DialogContent>
          <TextField defaultValue={editText} onChange={(e)=>setEditText(e.target.value)}></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandle}>Cancelar</Button>
          <Button onClick={() => {editTodo(todo.id, editText); dialogHandle()} }>Editar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
