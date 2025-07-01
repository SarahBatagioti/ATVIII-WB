import { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import "../../../styles/global.css"

interface ProdutoMaisVendido {
  id: number;
  nome: string;
  preco: number;
  totalClientes: number;
}

interface Props {
  tema: string;
}

// Dados fictícios para produtos mais vendidos para o gênero masculino
const produtosMaisVendidosMasculinoFicticios: ProdutoMaisVendido[] = [
  { id: 1, nome: "Shampoo Masculino", preco: 35.0, totalClientes: 1300 },
  { id: 2, nome: "Gel de Cabelo", preco: 25.0, totalClientes: 1100 },
  { id: 3, nome: "Creme para o Rosto", preco: 45.0, totalClientes: 900 },
  { id: 4, nome: "Pó Compacto", preco: 55.0, totalClientes: 800 },
  { id: 5, nome: "Pomada Modeladora", preco: 30.0, totalClientes: 750 },
  { id: 6, nome: "Desodorante", preco: 20.0, totalClientes: 700 },
  { id: 7, nome: "Hidratante Corporal", preco: 50.0, totalClientes: 680 },
  { id: 8, nome: "Creme Antirrugas", preco: 70.0, totalClientes: 650 },
  { id: 9, nome: "Perfume Masculino", preco: 90.0, totalClientes: 600 },
  { id: 10, nome: "Pomada de Cabelo", preco: 40.0, totalClientes: 550 },
];

export default function ListagemProdutosMaisVendidosMasculino({ tema }: Props) {
  const [produtos, setProdutos] = useState<ProdutoMaisVendido[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    setProdutos(produtosMaisVendidosMasculinoFicticios);
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }, [produtos]);

  return (
    <div className="row">
      <div className="col s10 offset-s1">
        <h4 className="center-align pink-text text-lighten-1">
          PRODUTOS MAIS VENDIDOS PARA O GÊNERO MASCULINO
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
