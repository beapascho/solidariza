import { useState } from "react";

const API_URL = "http://localhost:5000/voluntary/register";

export const useRegisterVolunteer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerVolunteer = async (volunteerData: any) => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(volunteerData),
      });
  
      const data = await response.json(); // Tenta capturar a resposta JSON do servidor
  
      if (!response.ok) {
        throw new Error(data.error || "Erro desconhecido no registro");
      }
  
      return data;
    } catch (err: any) {
      setError(err.message); // Agora mostramos o erro real
      return null;
    } finally {
      setLoading(false);
    }
  };
  

  return { registerVolunteer, loading, error };
};
