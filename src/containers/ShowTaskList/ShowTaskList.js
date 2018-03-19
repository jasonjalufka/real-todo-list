import { connect } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';

const mapStateToProps = state => {
  return {
    tasks: state.tasks
    // tasks: functionName(state.tasks, state.sortBy)
  }
}

const ShowTaskList = connect(
  mapStateToProps)(TaskList)

export default ShowTaskList;