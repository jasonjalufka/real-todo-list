import React, { Component } from 'react';
import { connect } from 'react-redux';

class TaskForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      id: null,
      priority: '1',
      task: '',
      entryDate: '',
      dueDate: '',
      status: '',
      isHidden: true
    }
    this.getDateAdded();
  }

  getDateAdded() {
    let today = new Date();
    let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    return date;
  }

  componentDidMount() {
    if (this.props.id) {
      this.setState({id: this.props.id});
    }
  }

  // populateState = () => {
  //   if(this.props.priority) {
  //     console.log("I HAVE PROPERTIES");
  //   }
  //   else {
  //     console.log("I HAVE NO PROPERTIES");
  //   }
  // }

  render() {
    let priority, task, entryDate, dueDate, status;

    return(
      <div className="TaskForm">
        <h3>Task Information</h3>
        <form className="TaskForm"
              onSubmit={this.props.submitHandler}>
          <label>Priority</label>
            <select ref={(input) => {priority = input}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

          <label>Task</label>
           <input type="text" placeholder="Walk the dog..." ref={(input) => {task = input}} />

          <label>Entry Date</label>
            <input type="text" ref={(input) => {entryDate = input}} value={this.getDateAdded()} readOnly />

          <label>Due Date</label>
            <input type="date" ref={(input) => {dueDate = input}} />

          <label>Status</label>
            <select ref={(input) => {status = input} }>
              <option value="NOT STARTED">Not Started</option>
              <option value="IN PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>

            <button className="button-primary" type="submit" onClick={() => {
              this.props.submitHandler
              if (this.state.id !== null) {
                this.props.onEditTask(this.state.id, priority.value, task.value, entryDate.value, dueDate.value, status.value)
              }
              else {
                this.props.onAddTask(priority.value, task.value, entryDate.value, dueDate.value, status.value)
              }
            }}>
              Submit
            </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    priority: state.tasks.priority
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: (priority, task, entryDate, dueDate, status) => dispatch({type: 'ADD_TASK', priority, task, entryDate, dueDate, status}),
    onEditTask: (id, priority, task, entryDate, dueDate, status) => dispatch({type: 'EDIT_TASK', id, priority, task, entryDate, dueDate, status})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);