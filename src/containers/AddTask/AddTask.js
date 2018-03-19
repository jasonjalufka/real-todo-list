import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskForm from '../TaskForm/TaskForm';

class AddTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHidden: true
    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onSubmitHandler}>Add Task</button>
        {!this.state.isHidden && <TaskForm submitHandler={this.onSubmitHandler} />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    priority: state.tasks.priority
  }
};

export default connect(mapStateToProps)(AddTask);