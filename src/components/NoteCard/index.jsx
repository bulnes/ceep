import './styles.css';

import { ReactComponent as DeleteSVG } from '../../assets/images/delete.svg';

function NoteCard({ note, noteId, deleteNote }) {

  function deleteNoteById() {
    deleteNote(noteId);
  }

  return (
    <section className="card-nota">
      <header className="card-nota_cabecalho">
        <h3 className="card-nota_titulo">{note.title}</h3>
        <DeleteSVG alt="Excluir nota" className="card-nota_icon" onClick={deleteNoteById} />
      </header>
      <p className="card-nota_texto">{note.description}</p>
    </section>
  );
};

export default NoteCard;