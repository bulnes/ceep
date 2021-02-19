import NoteCard from "../NoteCard";
import "./styles.css";

function NotesList({ notes }) {
  return (
    <ul className="lista-notas">
      {notes.map((note, index) => {
        return (
          <li className="lista-notas_item" key={index}>
            <NoteCard />
          </li>
        );
      })}
    </ul>
  );
};

export default NotesList;
