import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from './Note'
import CreateArea from "./CreateArea";
function App() {
  const [notes, setNote] = useState([]);
  function AddNote(note) {
    setNote(prevNote => [...prevNote, note]);
  }
  function DeleteNote(id) {
    setNote(prevNote => {
      return prevNote.filter((note, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div >
      <Header />
      <CreateArea onAdd={AddNote} />
      {notes.map((note, index) => <Note onDelete={DeleteNote} id={index} key={index} title={note.title} content={note.content} />)}
      <Footer />
    </div>
  );
}

export default App;
