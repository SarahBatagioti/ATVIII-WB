import { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Servico from "../../../modelo/Servico";
import "../../../styles/global.css"

interface Props {
  tema: string;
}

const servicosFicticios: Servico[] = [
  new Servico("Corte de Cabelo", 80.0),
  new Servico("Manicure", 40.0),
  new Servico("Pedicure", 45.0),
  new Servico("Design de Sobrancelhas", 50.0),
  new Servico("Maquiagem", 100.0),
  new Servico("Hidratação Capilar", 70.0),
  new Servico("Corte e Penteado", 120.0),
  new Servico("Depilação", 60.0),
  new Servico("Alisamento", 150.0),
  new Servico("Penteado", 90.0)
];

export default function ListagemTodosServicos({ tema }: Props) {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    setServicos(servicosFicticios);
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }, [servicos]);

  return (
    <div className="row">
      <div className="col s10 offset-s1">
        <h4 className="center-align pink-text text-lighten-1">LISTA DE SERVIÇOS</h4>

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
