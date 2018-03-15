import { v4 } from 'node-uuid';

export const addTask = (priority, text, entryDate, dueDate, status) => {
  return {
    type: 'ADD_TASK',
    id: v4(),
    priority: priority,
    text: text,
    entryDate: entryDate,
    dueDate: dueDate,
    status: status
  }
}

export const deleteTask = (id) => {
  return {
    type: 'DELETE_TASK',
    id: id
  }
}

export const editTask = (id) => {
  return {
    type: 'EDIT_TASK',
    id: id
  }
}

// export const setPriority = priority => {
//   return {
//     type: 'SET_PRIORITY',
//     priority
//   }
// }

// export const setStatus = status => {
//   return {
//     type: 'SET_STATUS',
//     status
//   }
// }

// export const setDueDate = date => {
//   return {
//     type: 'SET_DUE_DATE',
//     date
//   }
// }