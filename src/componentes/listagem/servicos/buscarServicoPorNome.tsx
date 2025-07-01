import { useState, ChangeEvent } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import "../../../styles/global.css"

interface Servico {
  id: number;
  nome: string;
  preco: number;
}

interface Props {
  tema:
   string;
}
const servicosDeBelezaFicticios: Servico[] = [
  { id: 1, nome: "Corte de Cabelo", preco: 80.0 },
  { id: 2, nome: "Manicure", preco: 40.0 },
  { id: 3, nome: "Pedicure", preco: 45.0 },
  { id: 4, nome: "Depilação", preco: 60.0 },
  { id: 5, nome: "Maquiagem", preco: 100.0 },
  { id: 6, nome: "Tratamento Facial", preco: 120.0 },
  { id: 7, nome: "Penteado", preco: 90.0 },
  { id: 8, nome: "Alisamento", preco: 150.0 },
  { id: 9, nome: "Hidratação Capilar", preco: 70.0 },
  { id: 10, nome: "Design de Sobrancelhas", preco: 50.0 }
];

export default function BuscarServicoPorNome({ tema }: Props) {
  const [nomeBusca, setNomeBusca] = useState("");
  const [servico, setServico] = useState<Servico | null>(null);
  const [erro, setErro] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNomeBusca(event.target.value);
    setErro("");
    setServico(null);
  };

  const buscarServico = () => {
    const nomeFormatado = nomeBusca.trim().toLowerCase();
    if (!nomeFormatado) {
      setErro("Digite um nome válido");
      return;
    }

    const servicoEncontrado = servicosDeBelezaFicticios.find(s =>
      s.nome.toLowerCase().includes(nomeFormatado)
    );

    if (servicoEncontrado) {
      setServico(servicoEncontrado);
    } else {
      setErro("Serviço não encontrado");
      setServico(null);
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
        <h5 className={`pink-text text-lighten-1 center-align`}>BUSCAR SERVIÇO POR NOME</h5>

        <div className="input-field">
          <input
            type="text"
            value={nomeBusca}
            onChange={handleChange}
            placeholder="Digite o nome do serviço"
            className="validate"
          />
        </div>

        <div className="center-align">
          <button className={`btn ${tema}`} onClick={buscarServico}>
            Buscar
          </button>
        </div>

        {erro && (
          <p className="center-align red-text" style={{ marginTop: '1.5rem' }}>
            {erro}
          </p>
        )}

        {servico && (
          <div className="card" style={{ marginTop: '1.5rem' }}>
            <div className={`card-content pink-text text-lighten-1`}>
              <span className="card-title">{servico.nome}</span>
              <p><strong>ID:</strong> {servico.id}</p>
              <p><strong>Preço:</strong> R$ {servico.preco.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
