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

const servicosMaisConsumidosMasculinoFicticios: ServicoMaisConsumido[] = [
  { id: 1, nome: "Corte de Cabelo", preco: 80.0, totalClientes: 1200 },
  { id: 2, nome: "Barba", preco: 50.0, totalClientes: 1000 },
  { id: 3, nome: "Manicure Masculino", preco: 40.0, totalClientes: 950 },
  { id: 4, nome: "Hidratação Capilar", preco: 70.0, totalClientes: 800 },
  { id: 5, nome: "Depilação Masculina", preco: 60.0, totalClientes: 750 },
  { id: 6, nome: "Penteado Masculino", preco: 90.0, totalClientes: 700 },
  { id: 7, nome: "Design de Sobrancelhas Masculino", preco: 50.0, totalClientes: 680 },
  { id: 8, nome: "Corte de Cabelo + Barba", preco: 120.0, totalClientes: 650 },
  { id: 9, nome: "Corte e Penteado", preco: 100.0, totalClientes: 600 },
  { id: 10, nome: "Escova", preco: 60.0, totalClientes: 550 },
];

export default function ListagemServicosMaisConsumidosMasculino({ tema }: Props) {
  const [servicos, setServicos] = useState<ServicoMaisConsumido[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    setServicos(servicosMaisConsumidosMasculinoFicticios);
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }, [servicos]);

  return (
    <div className="row">
      <div className="col s10 offset-s1">
        <h4 className="center-align pink-text text-lighten-1">
          SERVIÇOS MAIS CONSUMIDOS POR CLIENTES MASCULINOS
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
                <i className="material-icons">cut</i>
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
