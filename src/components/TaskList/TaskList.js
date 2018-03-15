import React from 'react';
import Task from '../Task/Task';

const TaskList = ({tasks}) => (

  <table className="u-full-width">
    <tbody>
      <tr>
        <th>Priority</th>
        <th>Task</th> 
        <th>Entry Date</th>
        <th>Due Date</th>
        <th>Status</th>
      </tr>
        {tasks.map(task => (
          <Task key={task.id} id={task.id} {...task} />
        ))}
      </tbody>
    </table>
)

export default TaskList;