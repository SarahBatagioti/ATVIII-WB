import { useState, ChangeEvent } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import "../../../styles/global.css";

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

interface Props {
  tema: string;
}

// Dados fictícios de produtos de beleza
const produtosDeBelezaFicticios: Produto[] = [
  { id: 1, nome: "Shampoo", preco: 29.9 },
  { id: 2, nome: "Condicionador", preco: 35.5 },
  { id: 3, nome: "Pomada", preco: 22.0 },
  { id: 4, nome: "Creme corporal", preco: 40.0 },
  { id: 5, nome: "Gel de cabelo", preco: 18.0 },
  { id: 6, nome: "Máscara capilar", preco: 50.0 },
  { id: 7, nome: "Esfoliante facial", preco: 45.0 },
  { id: 8, nome: "Hidratante facial", preco: 60.0 },
  { id: 9, nome: "Pó compacto", preco: 80.0 },
  { id: 10, nome: "Rímel", preco: 45.0 },
  { id: 11, nome: "Base líquida", preco: 70.0 },
];

export default function BuscarProdutoPorNome({ tema }: Props) {
  const [nomeBusca, setNomeBusca] = useState("");
  const [produto, setProduto] = useState<Produto | null>(null);
  const [erro, setErro] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNomeBusca(event.target.value);
    setErro("");
    setProduto(null);
  };

  const buscarProduto = () => {
    const nomeFormatado = nomeBusca.trim().toLowerCase();
    if (!nomeFormatado) {
      setErro("Digite um nome válido");
      return;
    }

    // Busca o produto na lista fictícia
    const produtoEncontrado = produtosDeBelezaFicticios.find(p =>
      p.nome.toLowerCase().includes(nomeFormatado)
    );

    if (produtoEncontrado) {
      setProduto(produtoEncontrado);
    } else {
      setErro("Produto não encontrado");
      setProduto(null);
    }
  };

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div
        className="z-depth-2"
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h5 className={`pink-text text-lighten-1 center-align`}>BUSCAR PRODUTO POR NOME</h5>

        <div className="input-field">
          <input
            type="text"
            value={nomeBusca}
            onChange={handleChange}
            placeholder="Digite o nome do produto"
            className="validate"
          />
        </div>

        <div className="center-align">
          <button className={`btn ${tema}`} onClick={buscarProduto}>
            Buscar
          </button>
        </div>

        {erro && (
          <p className="center-align red-text" style={{ marginTop: '1.5rem' }}>
            {erro}
          </p>
        )}

        {produto && (
          <div className="card" style={{ marginTop: '1.5rem' }}>
            <div className={`card-content pink-text text-lighten-1`}>
              <span className="card-title">{produto.nome}</span>
              <p><strong>ID:</strong> {produto.id}</p>
              <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
