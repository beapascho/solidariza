import React from "react";
import { useNavigate } from "react-router-dom";

const ChooseRole = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Bem-vindo (a)</h1>
        <p className="text-gray-600 mb-6">
          Seja bem-vindo ao Solidária, uma plataforma criada para conectar voluntários a causas e projetos sociais que realmente fazem a diferença.
        </p>

        <button
          className="w-full p-3 mb-4 bg-gray-300 rounded-md text-black hover:bg-gray-400"
          onClick={() => navigate("/signup/volunteer")}
        >
          Sou Voluntário
        </button>

        <button
          className="w-full p-3 bg-gray-300 rounded-md text-black hover:bg-gray-400"
          onClick={() => navigate("/signup/requester")}
        >
          Sou Solicitante
        </button>
      </div>
    </div>
  );
};

export default ChooseRole;
