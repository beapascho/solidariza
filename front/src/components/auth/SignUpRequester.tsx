import React, { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Tittle from "../elements/Tittle";
import { useNavigate } from "react-router-dom";
import { useRegisterRequester } from "../../hooks/useRegisterRequester"; // Importando o hook

const SignupRequester = () => {
  const [institutionName, setInstitutionName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { registerRequester, loading, error } = useRegisterRequester(); // Usando o hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requesterData = {
      name: institutionName, // O backend espera "name" e não "institution_name"
      cnpj,
      email,
      password,
    };

    const response = await registerRequester(requesterData);

    if (response) {
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } else {
      alert(error || "Erro ao cadastrar instituição");
    }
  };
  

  return (
    <div>
      <div>
        <button 
          onClick={() => navigate("/login")} 
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-900"
        >
          ← Voltar
        </button>

        <Tittle text="Cadastro" position="center" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            text="Nome da Instituição"
            placeholder="Digite o nome da instituição"
            type="text"
            value={institutionName}
            onChange={(e) => setInstitutionName(e.target.value)}
          />

          <Input
            text="CNPJ"
            placeholder="Digite o CNPJ"
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />

          <Input
            text="E-mail"
            placeholder="Digite o e-mail da instituição"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            text="Senha"
            placeholder="Crie uma senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button text={loading ? "Cadastrando..." : "Cadastrar"} type="submit" disabled={loading} />
        </form>

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default SignupRequester;
