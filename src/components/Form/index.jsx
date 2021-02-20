import './styles.css';

let title = '';
let description = '';
let category = 'Sem categoria';

let createNote;

function handleTitleChange(event) {
  const { target } = event;
  title = target.value;
}

function handleDescriptionChange(event) {
  const { target } = event;
  description = target.value;
}

function handleCategoryChange(event) {
  const { target } = event;
  if (target.value.trim() !== '') {
    category = target.value;
  }
}

function handleForm(event) {
  event.preventDefault();

  if (createNote) {
    createNote(title, description, category);
  }
}

function Form(props) {
  const { categories } = props;
  createNote = props.createNote || null;

  return (
    <form className="form-cadastro" onSubmit={handleForm}>
      <select 
        name="categories" 
        id="categories" 
        className="form-cadastro_input" 
        onChange={handleCategoryChange}
      >
        <option>Sem categoria</option>
        {categories.map((category, index) => {
          return <option key={index}>{category}</option>
        })}
      </select>

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