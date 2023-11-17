import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTaskButton from './components/AddTaskButton';
import UpdateTaskButton from './components/UpdateTaskButton';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);  
  const [editedTask, setEditedTask] = useState(''); 

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const updateTask = () => {
    if (editedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editedTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditedTask('');
    }
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditedTask('');
  };

  return (
    <div className="todo-main">
      <h2>To-Do List</h2>
      <div className="input-section">
        <input
          type="text"
          id="todo-input"
          placeholder="Tapşırığı daxil et..."
          value={editIndex !== null ? editedTask : newTask}
          onChange={(e) => (editIndex !== null ? setEditedTask(e.target.value) : setNewTask(e.target.value))}
        />
        {editIndex !== null ? (
          <>
            <UpdateTaskButton onClick={updateTask} />
            <button id='btn' onClick={cancelEdit}>Cancel</button>
          </>
        ) : (
          <AddTaskButton onClick={addTask} />
        )}
      </div>
      <TaskList tasks={tasks} onRemoveTask={removeTask} onStartEdit={startEdit} />
    </div>
  )
}

export default App
