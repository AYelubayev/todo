import React from "react";
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

const TaskItem = ({ task, startEdit, removeTask, index }) => {
  return (
    <div className='list' key={index}>
      <Checkbox color="success" />
      <span className='taskName'>{task}</span>
      <EditNoteIcon id="editBtn" onClick={() => startEdit(index)} style={{ marginLeft: "57vw" }} />
      <DeleteIcon id="deleteBtn" onClick={() => removeTask(index)} style={{ marginRight: "1vw" }} />
    </div>
  );
}

export default TaskItem;
