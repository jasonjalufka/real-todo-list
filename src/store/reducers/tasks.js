// TASKS REDUCER //
import { v4 } from 'node-uuid';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
       {
          id: v4(),
          priority: action.priority,
          text: action.task,
          entryDate: action.entryDate,
          dueDate: action.dueDate,
          status: action.status
        }
        // return [...state, action.payload]
      ]
    case 'DELETE_TASK':
      let newState = [
        ...state
      ]
      const taskId = action.id;
      return newState.filter(task => task.id !== taskId);
      //return state.filter(task => task.id !== action.id);
    case 'EDIT_TASK':
      let oldState = [
        ...state
      ]
      const editId = action.id;
      let editState = oldState.filter(task => task.id !== editId);

      return newState = [
        ...editState, 
        {
          id: action.id,
          priority: action.priority,
          text: action.task,
          entryDate: action.entryDate,
          dueDate: action.dueDate,
          status: action.status
        }
      ]
    default:
      return state;
  }
}

export default reducer;
