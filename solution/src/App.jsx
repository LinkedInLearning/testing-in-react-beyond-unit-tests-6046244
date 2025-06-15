import { TaskProvider } from './context/TaskContext';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';

function App() {
  return (
    <TaskProvider>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
      <TaskCounter />
    </TaskProvider>
  );
}

export default App;