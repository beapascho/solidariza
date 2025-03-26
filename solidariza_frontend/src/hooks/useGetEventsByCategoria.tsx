import { useState } from "react";

// Tipo base do evento
export interface EventData {
  id: number;
  nome: string;
  cidade: string;
  rua: string;
  numero: number;
  complemento: string;
  emailContato: string;
  numeroContato: string;
  descricao: string;
  dataEvento: string;
  horarioInicio?: string;
  horarioFim?: string;
  semHorario: boolean;
  duracao: string;
  categoria: string;
  createdAt: string;
  updatedAt: string;
}

const API_URL = "http://localhost:5000/requester/events"; // base da rota

export const useGetEventsByCategoria = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async (categoria: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/${categoria}`);

      const text = await response.text();
      const data = text ? JSON.parse(text) : [];

      if (!response.ok) {
        throw new Error(data?.error || "Erro ao buscar eventos");
      }

      setEvents(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { events, fetchEvents, loading, error };
};
