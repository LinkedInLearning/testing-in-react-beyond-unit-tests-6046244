import { useTask } from '../context/TaskContext';

function TaskList() {
  const { tasks } = useTask();

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

export default TaskList;