import { useState } from "react";

const API_URL = "http://localhost:5000/requester/register"; // URL correta para cadastro de requester

export const useRegisterRequester = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerRequester = async (requesterData: any) => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requesterData),
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : null;

      if (!response.ok) {
        throw new Error(data?.error || "Erro desconhecido no registro");
      }

      return data;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { registerRequester, loading, error };
};
