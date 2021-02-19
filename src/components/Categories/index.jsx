import './styles.css';

function Categories({ categories, add }) {

  function addCategory(event) {
    const { keyCode, target } = event;

    if (Number(keyCode) === 13) {
      const { value } = target;
      add(value);
    }
  }

  return (
    <section className="lista-categorias">
      <ul className="lista-categorias_lista">
        {categories.map((category, index) => {
          return (
            <li key={index} className="lista-categorias_item">
              {category}
            </li>
          );
        })}
      </ul>

      <input 
        type="text" 
        onKeyUp={addCategory} 
        className="lista-categorias_input"
        placeholder="Adicionar Categoria" />
    </section>
  );
};

export default Categories;