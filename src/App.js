import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import ResponsivePreview from './components/ResponsivePreview';
import './styles/App.css';

function App() {
  const [components, setComponents] = useState([]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Sidebar />
        <ResponsivePreview>
          <Editor components={components} setComponents={setComponents} />
        </ResponsivePreview>
      </div>
    </DndProvider>
  );
}

export default App;
