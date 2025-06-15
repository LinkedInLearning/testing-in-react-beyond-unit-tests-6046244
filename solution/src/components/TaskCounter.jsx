import { useTask } from '../context/TaskContext';

function TaskCounter() {
  const { tasks } = useTask();
  return <div>Total Tasks: {tasks.length}</div>;
}

export default TaskCounter;