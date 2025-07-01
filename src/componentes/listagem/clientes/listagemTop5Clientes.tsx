import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import "../../../styles/global.css";

type Props = {
    tema: string;
};

interface ClienteTopGasto {
    id: number;
    nome: string;
    nomeSocial: string;
    valorTotalGasto: number;
}

// Dados fictícios
const clientesTopGastoFicticios: ClienteTopGasto[] = [
    {
        id: 1,
        nome: "Sarah Oliveira",
        nomeSocial: "Sarah",
        valorTotalGasto: 1500.75
    },
    {
        id: 2,
        nome: "Alinne Costa",
        nomeSocial: "Alinne",
        valorTotalGasto: 2000.00
    },
    {
        id: 3,
        nome: "Vinicius Lima",
        nomeSocial: "Vinicius",
        valorTotalGasto: 1200.50
    },
    {
        id: 4,
        nome: "Marcos Pereira",
        nomeSocial: "Marcos",
        valorTotalGasto: 1700.25
    },
    {
        id: 5,
        nome: "Juares Souza",
        nomeSocial: "Juares",
        valorTotalGasto: 1300.90
    }
];

export default function ListagemTop5Clientes({ tema }: Props) {
    const [clientes, setClientes] = useState<ClienteTopGasto[]>([]);

    useEffect(() => {
        const elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        setClientes(clientesTopGastoFicticios);
    }, []);

    return (
        <div className="row">
            <div className="col s10 offset-s1">
                <h4 className="center-align pink-text text-lighten-1">TOP 5 CLIENTES POR VALOR GASTO</h4>
                <ul className="collapsible">
                    {clientes.map((cliente, index) => (
                        <li key={index}>
                            <div className={`collapsible-header ${tema} white-text`}>
                                <i className="material-icons">monetization_on</i>
                                {cliente.nome}
                            </div>
                            <div className="collapsible-body">
                                <p><strong>Nome Social:</strong> {cliente.nomeSocial}</p>
                                <p><strong>Valor Total Gasto:</strong> R$ {cliente.valorTotalGasto.toFixed(2)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
