import './styles.css';

let title = '';
let description = '';

let createNote;

function handleTitleChange(event) {
  const { target } = event;
  title = target.value;
}

function handleDescriptionChange(event) {
  const { target } = event;
  description = target.value;
}

function handleForm(event) {
  event.preventDefault();

  if (createNote) {
    createNote(title, description);
  }
}

function Form(props) {
  createNote = props.createNote || null;

  return (
    <form className="form-cadastro" onSubmit={handleForm}>
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        onChange={handleTitleChange}
      />
      <textarea
        rows={15}
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        onChange={handleDescriptionChange}
      />
      <button className="form-cadastro_input form-cadastro_submit">
        Criar Nota
        </button>
    </form>
  );
};

export default Form;