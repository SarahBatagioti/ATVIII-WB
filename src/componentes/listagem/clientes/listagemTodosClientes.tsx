import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import "../../../styles/global.css";

const clientesFicticios = [
    {
        id: 1,
        nome: "Sarah Oliveira",
        nomeSocial: "Sarah",
        genero: "Feminino",
        cpf: { valor: "123.321.456-99", dataEmissao: "2017-07-21" },
        rg: [{ valor: "MG-23.456.789", dataEmissao: "2017-07-18" }],
        telefone: [{ ddd: "11", numero: "981234567" }],
        produto: [{ nome: "Produto D", preco: 130.0 }],
        servico: [{ nome: "Serviço A", preco: 60.0 }]
    },
    {
        id: 2,
        nome: "Alinne Costa",
        nomeSocial: "Alinne",
        genero: "Feminino",
        cpf: { valor: "987.654.111-00", dataEmissao: "2019-02-12" },
        rg: [{ valor: "SP-12.345.678", dataEmissao: "2019-02-08" }],
        telefone: [{ ddd: "21", numero: "992345678" }],
        produto: [{ nome: "Produto E", preco: 250.0 }],
        servico: [{ nome: "Serviço B", preco: 100.0 }]
    },
    {
        id: 3,
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
        id: 4,
        nome: "Valdirene Silva",
        nomeSocial: "Valdirene",
        genero: "Feminino",
        cpf: { valor: "111.222.333-44", dataEmissao: "2020-01-15" },
        rg: [{ valor: "SP-32.654.876", dataEmissao: "2020-01-10" }],
        telefone: [{ ddd: "22", numero: "981234567" }],
        produto: [{ nome: "Produto G", preco: 90.0 }],
        servico: [{ nome: "Serviço D", preco: 55.0 }]
    },
    {
        id: 5,
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
        id: 6,
        nome: "Daiene Santos",
        nomeSocial: "Daiene",
        genero: "Feminino",
        cpf: { valor: "555.666.777-88", dataEmissao: "2022-03-30" },
        rg: [{ valor: "RJ-76.543.210", dataEmissao: "2022-03-25" }],
        telefone: [{ ddd: "41", numero: "999876543" }],
        produto: [{ nome: "Produto I", preco: 120.0 }],
        servico: [{ nome: "Serviço F", preco: 90.0 }]
    },
    {
        id: 7,
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
        id: 8,
        nome: "Stella Martins",
        nomeSocial: "Stella",
        genero: "Feminino",
        cpf: { valor: "444.555.666-77", dataEmissao: "2023-01-19" },
        rg: [{ valor: "RJ-98.765.432", dataEmissao: "2023-01-14" }],
        telefone: [{ ddd: "51", numero: "998123456" }],
        produto: [{ nome: "Produto K", preco: 190.0 }],
        servico: [{ nome: "Serviço H", preco: 170.0 }]
    },
    {
        id: 9,
        nome: "Liam Ribeiro",
        nomeSocial: "Liam",
        genero: "Masculino",
        cpf: { valor: "555.777.888-99", dataEmissao: "2021-09-09" },
        rg: [{ valor: "MG-54.321.987", dataEmissao: "2021-09-04" }],
        telefone: [{ ddd: "62", numero: "983456789" }],
        produto: [{ nome: "Produto L", preco: 300.0 }],
        servico: [{ nome: "Serviço I", preco: 200.0 }]
    },
    {
        id: 10,
        nome: "Vinah Costa",
        nomeSocial: "Vinah",
        genero: "Feminino",
        cpf: { valor: "222.333.444-55", dataEmissao: "2022-11-14" },
        rg: [{ valor: "SP-54.321.654", dataEmissao: "2022-11-09" }],
        telefone: [{ ddd: "61", numero: "912345678" }],
        produto: [{ nome: "Produto M", preco: 80.0 }],
        servico: [{ nome: "Serviço J", preco: 50.0 }]
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
  id: number;
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

export default function ListagemTodosClientes({ tema }: Props) {
  const [clientes, setClientes] = useState<ClienteAPI[]>([]);

  useEffect(() => {
    setClientes(clientesFicticios);

    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  }, []);

  return (
    <div className="row">
      <div className="col s10 offset-s1">
        <h4 className="center-align pink-text text-lighten-1">LISTA DE CLIENTES</h4>
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
                    {cliente.rg.map((r, i) => (
                      <li key={i}>{r.valor} - {new Date(r.dataEmissao).toLocaleDateString()}</li>
                    ))}
                  </ul>
                </div>

                <div className="divider"></div>

                <div className="section">
                  <h6 className="pink-text text-lighten-1">Telefones</h6>
                  <ul>
                    {cliente.telefone.map((tel, i) => (
                      <li key={i}>({tel.ddd}) {tel.numero}</li>
                    ))}
                  </ul>
                </div>

                <div className="divider"></div>

                <div className="section">
                  <h6 className="pink-text text-lighten-1">Produtos Consumidos</h6>
                  <ul>
                    {cliente.produto.map((p, i) => (
                      <li key={i}>{p.nome} - R$ {p.preco.toFixed(2)}</li>
                    ))}
                  </ul>
                </div>

                <div className="divider"></div>

                <div className="section">
                  <h6 className="pink-text text-lighten-1">Serviços Consumidos</h6>
                  <ul>
                    {cliente.servico.map((s, i) => (
                      <li key={i}>{s.nome} - R$ {s.preco.toFixed(2)}</li>
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
          <a className={`btn-floating btn-large waves-effect waves-light left-align ${tema} ml-2`}>
            <i className="material-icons">arrow_forward</i>
          </a>
        </div>
      </div>
    </div>
  );
}
