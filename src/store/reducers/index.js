import { combineReducers } from 'redux';
import tasks from './tasks';

const todo = combineReducers({
  tasks
});

export default todo;