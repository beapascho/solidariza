import React, { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateEvent } from "../../hooks/newEventRequester"; // ajuste o caminho conforme necessário
import newEventAnimais from "../../assets/newEventAnimais.jpg";
import newEventCriancas from "../../assets/newEventCriancas.jpg";
import newEventEducacao from "../../assets/newEventEducacao.png";
import newEventIdosos from "../../assets/newEventIdosos.png";
import newEventMeioAmbiente from "../../assets/newEventMeioAmbiente.jpg";
import newEventSaude from "../../assets/newEventSaude.png";

interface LocationState {
  categoria?: string;
}

const NewEvent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const categoria = state?.categoria ?? "Evento";
  const user = location.state?.user;

  const { createEvent, loading, error } = useCreateEvent();

  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [emailContato, setEmailContato] = useState("");
  const [numeroContato, setNumeroContato] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [horarioInicio, setHorarioInicio] = useState("");
  const [horarioFim, setHorarioFim] = useState("");
  const [duracao, setDuracao] = useState("");
  const [semHorario, setSemHorario] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const eventData = {
      nome,
      cidade,
      rua,
      numero,
      complemento,
      emailContato,
      numeroContato,
      descricao,
      dataEvento,
      horarioInicio: semHorario ? undefined : horarioInicio,
      horarioFim: semHorario ? undefined : horarioFim,
      semHorario,
      duracao,
      categoria,
      instituicao: user.name
    };

    const result = await createEvent(eventData);

    if (result) {
      navigate("/listEventRequester", { state: { categoria: categoria } })
    }
  };

  

  const getImageByCategoria = (categoria: string) => {
    switch (categoria.toLowerCase()) {
      case "animais":
        return newEventAnimais;
      case "crianças":
      case "criancas":
        return newEventCriancas;
      case "educação":
      case "educacao":
        return newEventEducacao;
      case "idosos":
        return newEventIdosos;
      case "meio ambiente":
      case "meioambiente":
        return newEventMeioAmbiente;
      case "saúde":
      case "saude":
        return newEventSaude;
      default:
        return ""; // opcional: imagem padrão
    }
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage: `url(${getImageByCategoria(categoria)})`,
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-10 w-full max-w-2xl">
        <h1 className="text-center text-xl font-semibold mb-6">
          Novo Evento ou Projeto - {categoria}
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome Evento</label>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cidade</label>
            <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rua</label>
            <input type="text" value={rua} onChange={e => setRua(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Número</label>
              <input type="text" value={numero} onChange={e => setNumero(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Complemento</label>
              <input type="text" value={complemento} onChange={e => setComplemento(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email de Contato</label>
            <input type="email" value={emailContato} onChange={e => setEmailContato(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Número de Contato</label>
            <input type="text" value={numeroContato} onChange={e => setNumeroContato(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Descrição do Evento</label>
            <textarea value={descricao} onChange={e => setDescricao(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" rows={3} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Data do Evento</label>
            <input type="date" value={dataEvento} onChange={e => setDataEvento(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Horário de Início</label>
              <input type="time" value={horarioInicio} onChange={e => setHorarioInicio(e.target.value)} disabled={semHorario} className="w-full p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Horário de Término</label>
              <input type="time" value={horarioFim} onChange={e => setHorarioFim(e.target.value)} disabled={semHorario} className="w-full p-3 border border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="semHorario" checked={semHorario} onChange={() => setSemHorario(!semHorario)} className="h-4 w-4" />
            <label htmlFor="semHorario" className="text-sm text-gray-700">Sem horário definido</label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tempo de Duração do Projeto</label>
            <input type="text" value={duracao} onChange={e => setDuracao(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            {loading ? "Criando..." : "Criar Evento"}
          </button>

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default NewEvent;
