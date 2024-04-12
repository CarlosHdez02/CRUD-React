// NewTask.jsx
import React from 'react';

const NewTask = ({ onAddTask }) => {
  const [task, setTask] = React.useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if(task.trim() !== ''){
      onAddTask(task);
    }

    setTask('');
  };

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Task: </label>
        <input type="text" id="name" name="name" value={task} onChange={handleInput} autoComplete="off" />
        <button type="submit">Create task</button>
      </form>
    </>
  );
};

export default NewTask;
