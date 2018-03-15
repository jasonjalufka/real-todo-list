import React from 'react';
import { connect } from 'react-redux';

const editButton = ( props ) => {
  return (
    <button onClick={() => props.onEdit(props.id)}>Edit</button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onEdit: (id) => dispatch({type: 'EDIT_TASK', id: id})
  }
}

export default connect(null, mapDispatchToProps)(editButton);