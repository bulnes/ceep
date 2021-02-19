import { useState } from "react";

import Form from "./components/Form";
import NotesList from "./components/NotesList";
import Categories from "./components/Categories";

import "./assets/styles/App.css";

function App() {
  const [notes, setNote] = useState([]);

  function createNote(title, description) {
    setNote([...notes, { title, description }]);
  }

  function deleteNote(index) {
    notes.splice(index, 1);
    setNote([...notes]);
  }

  return (
    <section className="conteudo">
      <Form createNote={createNote} />
      <main className="conteudo-principal">
        <Categories />
        <NotesList notes={notes} deleteNote={deleteNote} />
      </main>
    </section>
  );
}

export default App;
