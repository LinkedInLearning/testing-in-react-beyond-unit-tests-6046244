import { useState } from 'react';
import { useTask } from '../context/TaskContext';

function TaskInput() {
  const [input, setInput] = useState('');
  const { addTask } = useTask();

  const handleAdd = () => {
    if (input.trim() !== '') {
      addTask(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;