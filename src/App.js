// App.js

import React, { useState } from 'react';
import './App.css';
import TodoApp from '/Users/I526043/Documents/GitHub/TodoList-and-notes-app-witj-mailng-service/src/components/NotesApp/notesapp.js';
import NotesApp from '/Users/I526043/Documents/GitHub/TodoList-and-notes-app-witj-mailng-service/src/components/TodoApp/todoapp.js';

const App = () => {
	const [activeTab, setActiveTab] = useState('todo');
  
	return (
	  <div className="app">
		<div className="tabs">
		  <div
			className={`tab ${activeTab === 'todo' ? 'active' : ''}`}
			onClick={() => setActiveTab('todo')}
		  >
			Notes
		  </div>
		  <div
			className={`tab ${activeTab === 'notes' ? 'active' : ''}`}
			onClick={() => setActiveTab('notes')}
		  >
			To-Do List
		  </div>
		</div>
  
		{activeTab === 'todo' ? <TodoApp /> : <NotesApp />}
	  </div>
	);
  };
  
  export default App;