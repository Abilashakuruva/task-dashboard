// components/Board.jsx
import React, { useEffect, useState } from 'react';
import Column from './Column';
import TaskForm from './TaskForm';
import axios from 'axios';
// import { DragDropContext } from 'react-beautiful-dnd';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';


const STATUSES = ['To Do', 'In Progress', 'Done'];

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        const mockTasks = res.data.map(task => ({
          id: String(task.id),
          title: task.title,
          description: '',
          status: 'To Do'
        }));
        setTasks(mockTasks);
      });
  }, []);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    const updatedTasks = tasks.map(task =>
      task.id === draggableId ? { ...task, status: destination.droppableId } : task
    );
    setTasks(updatedTasks);
  };

  const addTask = task => {
    setTasks(prev => [...prev, task]);
    setShowForm(false);
  };

  return (
    <div className='board'>
      <button className='add-button'  onClick={() => setShowForm(true)}>+ Add New Task</button>
      {showForm && <TaskForm onSave={addTask} />}
      <DragDropContext onDragEnd={onDragEnd}>
        <div  className='board-columns'>
          {STATUSES.map(status => (
            <Column key={status} title={status} tasks={tasks.filter(t => t.status === status)} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
