import './App.css';
import React, {useState, useEffect} from 'react';
import TaskNav from './components/Task Nav/TaskNav';
import Task from './components/Task/Task';
import Header from './components/Header/Header';
import TodaySection from './components/Today Section/TodaySection';
import PendingSection from './components/Pending Section/PendingSection';
import CompletedSection from './components/Completed Section/CompletedSection';
import AllTaskSection from './components/All Tasks Section/AllTaskSection';

function App() {
  return (
    <div className="App">
      <h1>Kadince To-Do List</h1>
      <TaskNav/>
      <Task />
      <Header />
      <TodaySection/>
      <PendingSection/>
      <CompletedSection/>
      <AllTaskSection/>
    </div>
  );
}

export default App;
