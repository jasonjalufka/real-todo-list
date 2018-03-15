// TASKS REDUCER //

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          priority: action.priority,
          text: action.text,
          entryDate: action.entryDate,
          dueDate: action.dueDate,
          status: action.status
        }
      ]
    case 'DELETE_TASK':
      let newState = [
        ...state
      ]
      const taskId = action.id;
      return newState.filter(task => task.id !== taskId);
    case 'EDIT_TASK':
      let editState = [
        ...state
      ]
      const editId = action.id;
      return editState.filter(task => task.id === editId);
    default:
      return state;
  }
}

export default reducer;
