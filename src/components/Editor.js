import React from 'react';
import { useDrop } from 'react-dnd';
import Component from './Component';
import '../styles/Editor.css';

const Editor = ({ components, setComponents }) => {
  const [, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item) => addComponent(item.type),
  });

  const addComponent = (type) => {
    setComponents((prevComponents) => [
      ...prevComponents,
      { id: Date.now(), type },
    ]);
  };

  return (
    <div className="editor" ref={drop}>
      {components.map((component) => (
        <Component key={component.id} {...component} />
      ))}
    </div>
  );
};

export default Editor;
