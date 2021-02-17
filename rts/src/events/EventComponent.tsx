import { log } from 'console';
import React from 'react';

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  }
  return (
    <div>
      <input onChange={(e) => onChange(e)} />
      <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
  );
};

export default EventComponent;
