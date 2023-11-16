import React from 'react';

function UpdateTaskButton({ onClick }) {
  return (
    <button id="btn" onClick={onClick}>
      Update
    </button>
  );
}

export default UpdateTaskButton;