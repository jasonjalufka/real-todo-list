import React from 'react';
import { connect } from 'react-redux';

const deleteButton = ( props ) => {
  return (
    <div>
    <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (id) => dispatch({type: 'DELETE_TASK', id: id})
  }
}

export default connect(null,mapDispatchToProps)(deleteButton);

