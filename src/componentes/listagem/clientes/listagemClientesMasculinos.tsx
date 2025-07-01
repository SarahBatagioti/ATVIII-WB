import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import "../../../styles/global.css";

const clientesMasculinosFicticios = [
  {
    nome: "Vinicius Lima",
    nomeSocial: "Vinicius",
    genero: "Masculino",
    cpf: { valor: "321.654.987-11", dataEmissao: "2021-10-10" },
    rg: [{ valor: "RJ-65.432.198", dataEmissao: "2021-10-05" }],
    telefone: [{ ddd: "31", numero: "991234567" }],
    produto: [{ nome: "Produto F", preco: 180.0 }],
    servico: [{ nome: "Serviço C", preco: 110.0 }]
  },
  {
    nome: "Marcos Pereira",
    nomeSocial: "Marcos",
    genero: "Masculino",
    cpf: { valor: "789.654.321-00", dataEmissao: "2016-08-25" },
    rg: [{ valor: "MG-45.678.901", dataEmissao: "2016-08-20" }],
    telefone: [{ ddd: "11", numero: "987123456" }],
    produto: [{ nome: "Produto H", preco: 200.0 }],
    servico: [{ nome: "Serviço E", preco: 150.0 }]
  },
  {
    nome: "Juares Souza",
    nomeSocial: "Juares",
    genero: "Masculino",
    cpf: { valor: "333.444.555-66", dataEmissao: "2018-05-17" },
    rg: [{ valor: "SP-87.654.321", dataEmissao: "2018-05-12" }],
    telefone: [{ ddd: "21", numero: "998765432" }],
    produto: [{ nome: "Produto J", preco: 220.0 }],
    servico: [{ nome: "Serviço G", preco: 130.0 }]
  },
  {
    nome: "Liam Ribeiro",
    nomeSocial: "Liam",
    genero: "Masculino",
    cpf: { valor: "555.777.888-99", dataEmissao: "2021-09-09" },
    rg: [{ valor: "MG-54.321.987", dataEmissao: "2021-09-04" }],
    telefone: [{ ddd: "62", numero: "983456789" }],
    produto: [{ nome: "Produto L", preco: 300.0 }],
    servico: [{ nome: "Serviço I", preco: 200.0 }]
  }
];

type Props = {
  tema: string;
};

interface RG {
  valor: string;
  dataEmissao: string;
}

interface Telefone {
  ddd: string;
  numero: string;
}

interface Produto {
  nome: string;
  preco: number;
}

interface Servico {
  nome: string;
  preco: number;
}

interface ClienteAPI {
  nome: string;
  nomeSocial: string;
  genero: string;
  cpf: {
    valor: string;
    dataEmissao: string;
  };
  rg: RG[];
  telefone: Telefone[];
  produto: Produto[];
  servico: Servico[];
}

export default function ListagemClientesMasculinos({ tema }: Props) {
  const [clientes, setClientes] = useState<ClienteAPI[]>([]);

  useEffect(() => {
    setClientes(clientesMasculinosFicticios);

    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }, []);

  return (
    <div className="row">
      <div className="col s10 offset-s1">
        <h4 className="center-align pink-text text-lighten-1">CLIENTES DO GÊNERO MASCULINO</h4>
        <ul className="collapsible">
          {clientes.map((cliente, index) => (
            <li key={index}>
              <div className={`collapsible-header ${tema} white-text`}>
                <i className="material-icons">account_circle</i>
                {cliente.nome}
              </div>
              <div className="collapsible-body">
                <div className="section">
                  <h6 className="pink-text text-lighten-1">Informações Pessoais</h6>
                  <p><strong>Nome Social:</strong> {cliente.nomeSocial}</p>
                  <p><strong>Gênero:</strong> {cliente.genero}</p>
                  <p><strong>CPF:</strong> {cliente.cpf.valor}</p>
                  <p><strong>Data de Emissão do CPF:</strong> {new Date(cliente.cpf.dataEmissao).toLocaleDateString()}</p>
                </div>

                <div className="divider"></div>

                <div className="section">
                  <h6 className="pink-text text-lighten-1">RG(s)</h6>
                  <ul>
                    {cliente.rg.map((r, idx) => (
                      <li key={idx}>
                        {r.valor} - {new Date(r.dataEmissao).toLocaleDateString()}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="divider"></div>

                <div className="section">
                  <h6 className="pink-text text-lighten-1">Telefones</h6>
                  <ul>
                    {cliente.telefone.map((tel, idx) => (
                      <li key={idx}>
                        ({tel.ddd}) {tel.numero}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="divider"></div>

                <div className="section">
                  <h6 className="pink-text text-lighten-1">Produtos Consumidos</h6>
                  <ul>
                    {cliente.produto.map((prod, idx) => (
                      <li key={idx}>
                        {prod.nome} - R$ {prod.preco.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="divider"></div>

                <div className="section">
                  <h6 className="pink-text text-lighten-1">Serviços Consumidos</h6>
                  <ul>
                    {cliente.servico.map((serv, idx) => (
                      <li key={idx}>
                        {serv.nome} - R$ {serv.preco.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="center-align">
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
