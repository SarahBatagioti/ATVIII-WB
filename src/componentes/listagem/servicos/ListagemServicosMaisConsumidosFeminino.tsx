import { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import "../../../styles/global.css"

interface ServicoMaisConsumido {
  id: number;
  nome: string;
  preco: number;
  totalClientes: number;
}

interface Props {
  tema: string;
}

const servicosMaisConsumidosFemininoFicticios: ServicoMaisConsumido[] = [
  { id: 1, nome: "Manicure", preco: 40.0, totalClientes: 1500 },
  { id: 2, nome: "Corte de Cabelo", preco: 80.0, totalClientes: 1200 },
  { id: 3, nome: "Pedicure", preco: 45.0, totalClientes: 1100 },
  { id: 4, nome: "Hidratação Capilar", preco: 70.0, totalClientes: 900 },
  { id: 5, nome: "Maquiagem", preco: 100.0, totalClientes: 800 },
  { id: 6, nome: "Design de Sobrancelhas", preco: 50.0, totalClientes: 750 },
  { id: 7, nome: "Depilação", preco: 60.0, totalClientes: 700 },
  { id: 8, nome: "Tratamento Facial", preco: 120.0, totalClientes: 680 },
  { id: 9, nome: "Alisamento", preco: 150.0, totalClientes: 650 },
  { id: 10, nome: "Penteado", preco: 90.0, totalClientes: 600 },
];

export default function ListagemServicosMaisConsumidosFeminino({ tema }: Props) {
  const [servicos, setServicos] = useState<ServicoMaisConsumido[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    setServicos(servicosMaisConsumidosFemininoFicticios);
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }, [servicos]);

  return (
    <div className="row">
      <div className="col s10 offset-s1">
        <h4 className="center-align pink-text text-darken-2">
          SERVIÇOS MAIS CONSUMIDOS POR CLIENTES FEMININOS
        </h4>

        {erro && (
          <p className="red-text center-align" style={{ marginTop: '1rem' }}>
            {erro}
          </p>
        )}

        <ul className="collapsible">
          {servicos.map((servico, index) => (
            <li key={index}>
              <div className={`collapsible-header ${tema} white-text`}>
                <i className="material-icons">content_cut</i>
                {servico.nome}
              </div>
              <div className="collapsible-body">
                <p><strong>Nome:</strong> {servico.nome}</p>
                <p><strong>Preço:</strong> R$ {servico.preco.toFixed(2)}</p>
                <p><strong>Quantidade de Clientes:</strong> {servico.totalClientes}</p>
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
