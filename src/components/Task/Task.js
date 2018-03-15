import React from 'react'
import Delete from '../Delete/Delete';
import Edit from '../Edit/Edit';

const Task = ({id, priority, text, entryDate, dueDate, status}) => (

  <tr>
    <td>{priority}</td>
    <td>{text}</td> 
    <td>{entryDate}</td>
    <td>{dueDate}</td>
    <td>{status}</td>
    <td><Edit id={id}/></td>
    <td><Delete id={id} /></td>
  </tr>
)

export default Task;