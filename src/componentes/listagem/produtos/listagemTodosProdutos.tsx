import { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Produto from "../../../modelo/Produto";
import "../../../styles/global.css"

interface Props {
  tema: string;
}

// Dados fictícios para produtos
const produtosFicticios: Produto[] = [
  new Produto("Shampoo", 29.9),
  new Produto("Condicionador", 35.5),
  new Produto("Pomada", 22.0),
  new Produto("Creme Corporal", 40.0),
  new Produto("Gel de Cabelo", 18.0),
  new Produto("Máscara Capilar", 50.0),
  new Produto("Esfoliante Facial", 45.0),
  new Produto("Hidratante Facial", 60.0),
  new Produto("Pó Compacto", 80.0),
  new Produto("Rímel", 45.0)
];

export default function ListagemTodosProdutos({ tema }: Props) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    setProdutos(produtosFicticios);
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }, [produtos]);

  return (
    <div className="row">
      <div className="col s10 offset-s1">
        <h4 className="center-align pink-text text-lighten-1">LISTA DE PRODUTOS</h4>

        {erro && (
          <p className="red-text center-align" style={{ marginTop: '1rem' }}>
            {erro}
          </p>
        )}

        <ul className="collapsible">
          {produtos.map((produto, index) => (
            <li key={index}>
              <div className={`collapsible-header ${tema} white-text`}>
                <i className="material-icons">shopping_cart</i>
                {produto.nome}
              </div>
              <div className="collapsible-body">
                <p><strong>Nome:</strong> {produto.nome}</p>
                <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="center-align" style={{ marginTop: '1rem' }}>
          <a className={`btn-floating btn-large waves-effect waves-light left-align ${tema}`}>
            <i className="material-icons">arrow_back</i>
          </a>
          <a className={`btn-floating btn-large waves-effect waves-light left-align ${tema}`} style={{ marginLeft: '10px' }}>
            <i className="material-icons">arrow_forward</i>
          </a>
        </div>
      </div>
    </div>
  );
}
