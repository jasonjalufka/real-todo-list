import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskForm from '../../containers/TaskForm/TaskForm';

class EditButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

  toggleEditing () {
    this.setState ({
      isEditing: !this.state.isEditing
    });
  }
  render () {
    return (
      <div>
        <button onClick={this.toggleEditing.bind(this)} >
          Edit
        </button>
        {this.state.isEditing && <TaskForm id={this.props.id} />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEdit: (id) => dispatch({type: 'EDIT_TASK', id: id})
  }
}

export default connect(null, mapDispatchToProps)(EditButton);