import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/index';

let AddTask = ({ dispatch }) => {
  let priorityInput, taskInput, entryDate, dueDate, statusInput;

  let getDateAdded = () => {
    let today = new Date();
    let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    return date;
  }

  return (
    <div className="AddTask">
    <h3>Add Task</h3>
      <form className="AddTask"
        onSubmit={e => { e.preventDefault()
          if (!taskInput.value.trim()) {
            console.log('yo');
            return
          }
        dispatch(addTask(priorityInput.value, taskInput.value, entryDate.value, dueDate.value, statusInput.value))
        taskInput.value = '';
        priorityInput.value = '1';
        dueDate.value = '';
        statusInput.value = '';
        }
      }>

      {/* Priority Input */}
      <label>Priority</label>
      <select ref={(input) => {priorityInput = input} }>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      
      {/* Task Input */}
      <label>Task</label>
      <input type="text" ref={(input) => {taskInput = input}} />

      {/* Entry Date */}
      <label>Entry Date</label>
      <input type="text" ref={(input) => {entryDate = input}} value={getDateAdded()} readOnly />

      {/* Due Date */}
      <label>Due Date</label>
      <input type="date" ref={(input) => {dueDate = input}} />

      {/* Status Input */}
      <label>Status</label>
      <select ref={(input) => {statusInput = input} }>
        <option value="NOT STARTED">Not Started</option>
        <option value="IN PROGRESS">In Progress</option>
        <option value="DONE">Done</option>
      </select>
        <button className="button-primary" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    priority: state.tasks.priority
  }
};

AddTask = connect(mapStateToProps)(AddTask);

export default AddTask;