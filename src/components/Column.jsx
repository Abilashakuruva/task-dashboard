import React from 'react';
// import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

import TaskCard from './TaskCard';

const Column = ({ title, tasks }) => (
  <div className='column'>
    <h3>{title}</h3>
    <Droppable droppableId={title}>
      {provided => (
        <div ref={provided.innerRef} {...provided.droppableProps}  className='task-list'>
          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default Column;
