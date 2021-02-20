import Note from "../models/Note";

class NotesData {

  constructor() {
    this.items = [];
  }

  createNote(title, description, category) {
    const note = new Note(title, description, category);
    this.items.push(note);
  }

  deleteNote(index) {
    this.items.splice(index, 1);
  }
}

export default NotesData;
