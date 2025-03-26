// src/hooks/useListEventsByCategory.ts
import { useState } from "react";
import axios from "axios";

interface Evento {
  id: string;
  nome: string;
  cidade: string;
  dataEvento: string;
  descricao: string;
  rua: string;
  numero: string;
  complemento: string;
  horarioInicio?: string;
  horarioFim?: string;
  [key: string]: any;
}

export const useListEventsByCategory = () => {
  const [events, setEvents] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const listEvents = async (categoria: string,) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/voluntary/getAllEvents", {
        categoria,
      });

      setEvents(response.data);
    } catch (err: any) {
      setError("Erro ao buscar eventos.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    events,
    loading,
    error,
    listEvents,
  };
};
