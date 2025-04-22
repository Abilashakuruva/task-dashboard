import React, { useState } from 'react';

const TaskForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title) return alert('Title is required');
    const newTask = {
      id: Date.now().toString(),
      title,
      description: desc,
      status
    };
    onSave(newTask);
  };

  return (
    <form onSubmit={handleSubmit}  className="task-form">
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
