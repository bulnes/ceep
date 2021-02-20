import Form from "./components/Form";
import NotesList from "./components/NotesList";
import Categories from "./components/Categories";

import NotesData from "./data/NotesData";
import CategoriesData from "./data/CategoriesData";

import "./assets/styles/App.css";

function App() {
  const notes = new NotesData()
  const categories = new CategoriesData();

  return (
    <section className="conteudo">
      <Form createNote={notes.createNote.bind(notes)} categories={categories.items} />

      <main className="conteudo-principal">
        <Categories categories={categories.items} add={categories.createCategory.bind(categories)} />
        <NotesList notes={notes.items} remove={notes.deleteNote.bind(notes)} />
      </main>
    </section>
  );
}

export default App;
