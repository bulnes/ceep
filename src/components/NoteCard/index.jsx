import './styles.css';

import deleteSVG from '../../assets/images/delete.svg';

function NoteCard() {
  return (
    <section className="card-nota">
      <header className="card-nota_cabecalho">
        <h3 className="card-nota_titulo">Título</h3>
        <img src={deleteSVG} alt="Excluir nota" class="card-nota_icon" />
      </header>
      <p className="card-nota_texto">Escreva sua nota</p>
    </section>
  );
};

export default NoteCard;