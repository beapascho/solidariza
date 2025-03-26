import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useListEventsByCategory } from "../../hooks/useListEventsByCategory";

import newEventAnimais from "../../assets/newEventAnimais.jpg";
import newEventCriancas from "../../assets/newEventCriancas.jpg";
import newEventEducacao from "../../assets/newEventEducacao.png";
import newEventIdosos from "../../assets/newEventIdosos.png";
import newEventMeioAmbiente from "../../assets/newEventMeioAmbiente.jpg";
import newEventSaude from "../../assets/newEventSaude.png";

const ListEventRequester = () => {
  const location = useLocation();
  const categoria = location.state?.categoria ?? "Evento";
  const navigate = useNavigate();
  const user = location.state?.user;

  console.log("usessssssssse", user);

  const { events, listEvents, loading, error } = useListEventsByCategory();

  useEffect(() => {
    if (user?.name) {
      listEvents(categoria, user.name);
    }
  }, [categoria, user]);

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
        return ""; // imagem padrão opcional
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Novo Evento - {categoria}
      </h1>

      <button
        className="mb-10 bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition"
        onClick={() => navigate("/newEventRequester", { state: { categoria, user } })}
      >
        Inscrever
      </button>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 items-start">
        {/* Imagem da categoria à esquerda */}
        <div className="w-full lg:w-1/2">
          <img
            src={getImageByCategoria(categoria)}
            alt={categoria}
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Lista de eventos à direita */}
        <div className="flex-1 w-full space-y-8">
          {events.length > 0 ? (
            events.map((evento) => (
              <div
                key={evento.id}
                className="bg-gray-100 rounded-xl shadow-lg p-8 flex flex-col"
              >
                <h2 className="text-xl font-bold mb-2">{evento.nome}</h2>
                <p className="text-gray-700 mb-3">{evento.descricao}</p>
                <p className="text-gray-700 mb-1">
                  <strong>Data:</strong> {evento.dataEvento} &nbsp; | &nbsp;
                  <strong>Horário:</strong> {evento.horarioInicio} - {evento.horarioFim}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Endereço:</strong> {evento.rua}, {evento.numero} - {evento.complemento}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Cidade:</strong> {evento.cidade}
                </p>

                {/* <button className="self-start bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition">
                  Editar Informações
                </button> */}
              </div>
            ))
          ) : (
            !loading && <p className="text-gray-500">Nenhum evento encontrado.</p>
          )}

          {loading && <p className="text-gray-500">Carregando eventos...</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>

      {loading && <p className="text-gray-500 mt-6">Carregando eventos...</p>}
      {error && <p className="text-red-500 mt-6">{error}</p>}
    </div>

  );
};

export default ListEventRequester;
