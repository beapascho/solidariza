import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useListEventsByCategory } from "../../hooks/useListEventByCategoryVolunteer";

import newEventAnimais from "../../assets/newEventAnimais.jpg";
import newEventCriancas from "../../assets/newEventCriancas.jpg";
import newEventEducacao from "../../assets/newEventEducacao.png";
import newEventIdosos from "../../assets/newEventIdosos.png";
import newEventMeioAmbiente from "../../assets/newEventMeioAmbiente.jpg";
import newEventSaude from "../../assets/newEventSaude.png";

const ListEventRequester = () => {
  const location = useLocation();
  const categoria = location.state?.categoria ?? "Evento";
  const user = location.state?.user;
  const navigate = useNavigate();

  const { events, listEvents, loading, error } = useListEventsByCategory();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (categoria) {
      listEvents(categoria);
    }
  }, [categoria]);

  const handleVolunteer = () => {
    setShowModal(true);
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
        return "";
    }
  };

  const maskEmail = (email: string) => {
    const [userPart, domain] = email.split("@");
    const maskedUser = userPart.slice(0, 4) + "*".repeat(userPart.length - 4);
    return `${maskedUser}@${domain}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Novo Evento - {categoria}
      </h1>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 items-start">
        <div className="w-full lg:w-1/2">
          <img
            src={getImageByCategoria(categoria)}
            alt={categoria}
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

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

                <button
                  onClick={handleVolunteer}
                  className="self-start bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition"
                >
                  Me voluntariar
                </button>
              </div>
            ))
          ) : (
            !loading && <p className="text-gray-500">Nenhum evento encontrado.</p>
          )}

          {loading && <p className="text-gray-500">Carregando eventos...</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Eba! Você agora é um voluntário</h2>
            <p className="mb-2">
              Todas as informações sobre o evento foram enviadas para o seu e-mail
            </p>
            <div className="bg-gray-200 py-2 px-4 rounded-md font-mono font-semibold mb-4">
              {user?.email ? maskEmail(user.email) : "email@*****.com"}
            </div>
            <p className="mb-6 text-sm text-gray-700">
              Alguém da organização do evento entrará em contato com você nos próximos dias.<br />
              Fique atento à sua caixa de entrada para mais informações!
            </p>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition"
              onClick={() => setShowModal(false)}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListEventRequester;
