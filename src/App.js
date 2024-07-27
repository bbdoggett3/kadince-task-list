import './App.css';
import React, {useState, useEffect} from 'react';
import TaskNav from './components/Task Nav/TaskNav';

function App() {
  return (
    <div className="App">
      <h1>Kadince To-Do List</h1>
      <TaskNav/>
    </div>
  );
}

export default App;
