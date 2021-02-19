import { useState } from "react";
import Form from "./components/Form";
import NotesList from "./components/NotesList";

import "./assets/styles/App.css";

function App() {
  const [notes, setNote] = useState([]);

  function createNote(title, description) {
    setNote([...notes, { title, description }]);
  }

  return (
    <section className="conteudo">
      <Form createNote={createNote} />
      <NotesList notes={notes} />
    </section>
  );
}

export default App;
