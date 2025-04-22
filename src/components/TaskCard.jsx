import React from 'react';
// import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';


const TaskCard = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {provided => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps} className='task-card'>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
      </div>
    )}
  </Draggable>
);

export default TaskCard;
