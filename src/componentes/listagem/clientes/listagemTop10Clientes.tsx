import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import "../../../styles/global.css";

type Props = {
    tema: string;
};

interface ClienteMaisConsumidor {
    id: number;
    nome: string;
    nomeSocial: string;
    totalConsumido: number;
}

// Dados fictícios para clientes que mais consumiram e menos consumiram
const clientesTop10MaisConsumiram: ClienteMaisConsumidor[] = [
    { id: 1, nome: "Sarah Oliveira", nomeSocial: "Sarah", totalConsumido: 3000 },
    { id: 2, nome: "Alinne Costa", nomeSocial: "Alinne", totalConsumido: 2500 },
    { id: 3, nome: "Vinicius Lima", nomeSocial: "Vinicius", totalConsumido: 2000 },
    { id: 4, nome: "Marcos Pereira", nomeSocial: "Marcos", totalConsumido: 1800 },
    { id: 5, nome: "Juares Souza", nomeSocial: "Juares", totalConsumido: 1500 },
    { id: 6, nome: "Stella Martins", nomeSocial: "Stella", totalConsumido: 1400 },
    { id: 7, nome: "Liam Ribeiro", nomeSocial: "Liam", totalConsumido: 1300 },
    { id: 8, nome: "Carlos Oliveira", nomeSocial: "Carlos", totalConsumido: 1200 },
    { id: 9, nome: "Valdirene Silva", nomeSocial: "Valdirene", totalConsumido: 1100 },
    { id: 10, nome: "Daiene Santos", nomeSocial: "Daiene", totalConsumido: 1000 }
];

const clientesTop10MenosConsumiram: ClienteMaisConsumidor[] = [
    { id: 1, nome: "João Silva", nomeSocial: "João", totalConsumido: 50 },
    { id: 2, nome: "Carlos Oliveira", nomeSocial: "Carlos", totalConsumido: 60 },
    { id: 3, nome: "Vinah Costa", nomeSocial: "Vinah", totalConsumido: 70 },
    { id: 4, nome: "Juares Souza", nomeSocial: "Juares", totalConsumido: 80 },
    { id: 5, nome: "Marcos Pereira", nomeSocial: "Marcos", totalConsumido: 100 },
    { id: 6, nome: "Stella Martins", nomeSocial: "Stella", totalConsumido: 120 },
    { id: 7, nome: "Alinne Costa", nomeSocial: "Alinne", totalConsumido: 150 },
    { id: 8, nome: "Sarah Oliveira", nomeSocial: "Sarah", totalConsumido: 180 },
    { id: 9, nome: "Daiene Santos", nomeSocial: "Daiene", totalConsumido: 200 },
    { id: 10, nome: "Liam Ribeiro", nomeSocial: "Liam", totalConsumido: 220 }
];

export function ListagemTop10ClientesMaisConsumiram({ tema }: Props) {
    const [clientes, setClientes] = useState<ClienteMaisConsumidor[]>([]);

    useEffect(() => {
        const elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        setClientes(clientesTop10MaisConsumiram);
    }, []);

    return (
        <div className="row">
            <div className="col s10 offset-s1">
                <h4 className="center-align pink-text text-lighten-1">
                    TOP CLIENTES POR MAIOR QUANTIDADE CONSUMIDA
                </h4>
                <ul className="collapsible">
                    {clientes.map((cliente, index) => (
                        <li key={index}>
                            <div className={`collapsible-header ${tema} white-text`}>
                                <i className="material-icons">person</i>
                                {cliente.nome}
                            </div>
                            <div className="collapsible-body">
                                <p><strong>Nome Social:</strong> {cliente.nomeSocial}</p>
                                <p><strong>Total Consumido:</strong> R$ {cliente.totalConsumido}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function ListagemTop10ClientesMenosConsumiram({ tema }: Props) {
    const [clientes, setClientes] = useState<ClienteMaisConsumidor[]>([]);

    useEffect(() => {
        const elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

       
        setClientes(clientesTop10MenosConsumiram);
    }, []);

    return (
        <div className="row">
            <div className="col s10 offset-s1">
                <h4 className="center-align pink-text text-lighten-1">
                    TOP CLIENTES POR MENOR QUANTIDADE CONSUMIDA
                </h4>
                <ul className="collapsible">
                    {clientes.map((cliente, index) => (
                        <li key={index}>
                            <div className={`collapsible-header ${tema} white-text`}>
                                <i className="material-icons">person</i>
                                {cliente.nome}
                            </div>
                            <div className="collapsible-body">
                                <p><strong>Nome Social:</strong> {cliente.nomeSocial}</p>
                                <p><strong>Total Consumido:</strong> R$ {cliente.totalConsumido}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
