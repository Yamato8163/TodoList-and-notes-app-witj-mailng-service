// NotesApp.js

import React, { useState } from 'react';
import styles from './notesapp.module.css';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');

  const addNote = () => {
    if (noteInput.trim() !== '') {
      setNotes([...notes, noteInput]);
      setNoteInput('');
    }
  };

  return (
    <div className={styles.notesApp}>
      <h1 clsassName={styles.heroTitle}>Notes App</h1>
      <input
        className = {styles.inputBox}
        type="text"
        placeholder="Enter a note"
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
      />
      <button className = {styles.actionBtn} onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesApp;
