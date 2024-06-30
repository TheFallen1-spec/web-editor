import React from 'react';
import { useDrag } from 'react-dnd';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const componentsList = [
  { type: 'text', name: 'Text Block' },
  { type: 'image', name: 'Image Holder' },
  { type: 'button', name: 'Button' },
  { type: 'header', name: 'Header' },
  { type: 'footer', name: 'Footer' },
  { type: 'carousel', name: 'Carousel' },
  { type: 'card', name: 'Card' },
  { type: 'video', name: 'Video Embed' },
  { type: 'form', name: 'Form' },
  { type: 'grid', name: 'Grid Layout' },
  { type: 'social', name: 'Social Media Icons' },
];

const SidebarItem = ({ type, name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <ListItem ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <ListItemText primary={name} />
    </ListItem>
  );
};

const Sidebar = () => (
  <div className="sidebar">
    <List>
      {componentsList.map((component) => (
        <SidebarItem key={component.type} {...component} />
      ))}
    </List>
  </div>
);

export default Sidebar;
