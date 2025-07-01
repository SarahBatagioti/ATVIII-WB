import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import "../../../styles/global.css";

interface ProdutoMaisVendido {
  id: number;
  nome: string;
  preco: number;
  totalClientes: number;
}

interface Props {
  tema: string;
}

// Dados fictícios para produtos mais vendidos para o gênero feminino
const produtosMaisVendidosFemininoFicticios: ProdutoMaisVendido[] = [
  { id: 1, nome: "Shampoo", preco: 29.9, totalClientes: 1200 },
  { id: 2, nome: "Condicionador", preco: 35.5, totalClientes: 1000 },
  { id: 3, nome: "Pomada", preco: 22.0, totalClientes: 950 },
  { id: 4, nome: "Creme corporal", preco: 40.0, totalClientes: 800 },
  { id: 5, nome: "Gel de cabelo", preco: 18.0, totalClientes: 750 },
  { id: 6, nome: "Máscara capilar", preco: 50.0, totalClientes: 700 },
  { id: 7, nome: "Esfoliante facial", preco: 45.0, totalClientes: 680 },
  { id: 8, nome: "Hidratante facial", preco: 60.0, totalClientes: 650 },
  { id: 9, nome: "Pó compacto", preco: 80.0, totalClientes: 600 },
  { id: 10, nome: "Rímel", preco: 45.0, totalClientes: 550 },
];

export default function ListagemProdutosMaisVendidosFeminino({ tema }: Props) {
  const [produtos, setProdutos] = useState<ProdutoMaisVendido[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    setProdutos(produtosMaisVendidosFemininoFicticios);
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }, [produtos]);

  return (
    <div className="row">
      <div className="col s10 offset-s1">
        <h4 className="center-align pink-text text-darken-2">
          PRODUTOS MAIS VENDIDOS PARA O GÊNERO FEMININO
        </h4>

        {erro && (
          <p className="red-text center-align" style={{ marginTop: '1rem' }}>
            {erro}
          </p>
        )}

        <ul className="collapsible">
          {produtos.map((produto, index) => (
            <li key={index}>
              <div className={`collapsible-header ${tema} white-text`}>
                <i className="material-icons">shopping_bag</i>
                {produto.nome}
              </div>
              <div className="collapsible-body">
                <p><strong>Nome:</strong> {produto.nome}</p>
                <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
                <p><strong>Quantidade Vendida:</strong> {produto.totalClientes}</p>
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
