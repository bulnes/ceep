import NoteCard from "../NoteCard";
import "./styles.css";

function NotesList({ notes, remove }) {
  return (
    <ul className="lista-notas">
      {notes.map((note, index) => {
        return (
          <li className="lista-notas_item" key={index}>
            <NoteCard note={note} noteId={index} remove={remove} />
          </li>
        );
      })}
    </ul>
  );
};

export default NotesList;
