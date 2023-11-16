import React from 'react';

function TaskList({ tasks, onRemoveTask, onStartEdit }) {
  return (
    <ul id="todo-list">
      {tasks.map((task, index) => (
        <li key={index} onClick={() => onStartEdit(index)}>
          {task}
          <button  id="btn1" onClick={() => onRemoveTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;