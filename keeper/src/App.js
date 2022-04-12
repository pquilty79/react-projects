
import './App.css';
import Header from "./Header";
import Note from "./Note";
import React from "react";
import Footer from "./Footer";
import notes from "./notes";



function App() {
  return (
      <div><Header />
          {notes.map(note => <Note key={note.key} name={note.name} content={note.content}/>)}
          <Footer />
      </div>
  );
}

export default App;
