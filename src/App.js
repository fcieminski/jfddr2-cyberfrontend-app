import './index-reset.css';
import React from 'react';
import Column from '../src/views/ProjectView/Column.js';
import AddNewColumn from './views/ProjectView/AddNewColumn.js';

const App = () => {
  return (
    //temporarly className
    <div className="project-canvas">
      <Column label="TODO" />
      <Column />
      <AddNewColumn />
    </div>
  );
};

export default App;
