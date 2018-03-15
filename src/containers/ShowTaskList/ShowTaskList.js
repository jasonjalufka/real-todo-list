import { connect } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const ShowTaskList = connect(
  mapStateToProps)(TaskList)

export default ShowTaskList;