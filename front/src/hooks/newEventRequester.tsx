import { useState } from "react";

const API_URL = "http://localhost:5000/requester/newEvent"; // ajuste para sua rota real

// Tipos para os dados do evento
export interface EventData {
  nome: string;
  cidade: string;
  rua: string;
  numero: string;
  complemento: string;
  emailContato: string;
  numeroContato: string;
  descricao: string;
  dataEvento: string;
  horarioInicio?: string;
  horarioFim?: string;
  semHorario: boolean;
  duracao: string;
  categoria?: string;
  instituicao: string;

}

export const useCreateEvent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  console.log("aaa");

  const createEvent = async (eventData: EventData): Promise<any | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : null;

      if (!response.ok) {
        throw new Error(data?.error || "Erro desconhecido ao criar evento");
      }

      return data;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createEvent, loading, error };
};
