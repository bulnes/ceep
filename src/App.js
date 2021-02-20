import { useState } from "react";

import Form from "./components/Form";
import NotesList from "./components/NotesList";
import Categories from "./components/Categories";

import "./assets/styles/App.css";

function App() {
  const [notes, setNote] = useState([]);
  const [categories, setCategory] = useState([]);

  function createNote(title, description, category) {
    setNote([...notes, { title, description, category }]);
  }

  function deleteNote(index) {
    notes.splice(index, 1);
    setNote([...notes]);
  }

  function createCategory(name) {
    setCategory([...categories, name]);
  }

  return (
    <section className="conteudo">
      <Form createNote={createNote} categories={categories} />

      <main className="conteudo-principal">
        <Categories categories={categories} add={createCategory} />
        <NotesList notes={notes} remove={deleteNote} />
      </main>
    </section>
  );
}

export default App;
