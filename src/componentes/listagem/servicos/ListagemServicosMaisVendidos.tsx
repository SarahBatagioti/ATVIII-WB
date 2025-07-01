import { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import "../../../styles/global.css"

interface ServicoMaisVendido {
  id: number;
  nome: string;
  preco: number;
  quantidadeVendida: number;
}

interface Props {
  tema: string;
}

const servicosMaisVendidosFicticios: ServicoMaisVendido[] = [
  { id: 1, nome: "Corte de Cabelo", preco: 80.0, quantidadeVendida: 1500 },
  { id: 2, nome: "Manicure", preco: 40.0, quantidadeVendida: 1200 },
  { id: 3, nome: "Pedicure", preco: 45.0, quantidadeVendida: 1100 },
  { id: 4, nome: "Design de Sobrancelhas", preco: 50.0, quantidadeVendida: 1000 },
  { id: 5, nome: "Tratamento Facial", preco: 100.0, quantidadeVendida: 950 },
  { id: 6, nome: "Hidratação Capilar", preco: 70.0, quantidadeVendida: 900 },
  { id: 7, nome: "Corte e Penteado", preco: 120.0, quantidadeVendida: 850 },
  { id: 8, nome: "Depilação", preco: 60.0, quantidadeVendida: 800 },
  { id: 9, nome: "Alisamento", preco: 150.0, quantidadeVendida: 750 },
  { id: 10, nome: "Maquiagem", preco: 130.0, quantidadeVendida: 700 }
];

export default function ListagemServicosMaisVendidos({ tema }: Props) {
  const [servicos, setServicos] = useState<ServicoMaisVendido[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    setServicos(servicosMaisVendidosFicticios);
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }, [servicos]);

  return (
    <div className="row">
      <div className="col s10 offset-s1">
        <h4 className="center-align pink-text text-lighten-1">SERVIÇOS MAIS VENDIDOS</h4>

        {erro && (
          <p className="red-text center-align" style={{ marginTop: '1rem' }}>
            {erro}
          </p>
        )}

        <ul className="collapsible">
          {servicos.map((servico, index) => (
            <li key={index}>
              <div className={`collapsible-header ${tema} white-text`}>
                <i className="material-icons">build</i>
                {servico.nome}
              </div>
              <div className="collapsible-body">
                <p><strong>Nome:</strong> {servico.nome}</p>
                <p><strong>Preço:</strong> R$ {servico.preco.toFixed(2)}</p>
                <p><strong>Quantidade Vendida:</strong> {servico.quantidadeVendida}</p>
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
