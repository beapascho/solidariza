
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import Input from "../elements/Input";
import Button from "../elements/Button";
import Tittle from "../elements/Tittle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = await login(email, password); // Aguarda o login e recebe os dados do usuário
  
    if (user) {
      if (user.cnpj) {
        console.log(user);
        navigate("/homeRequester", { state: { user: user } }); // Se tiver CNPJ, vai para HomeRequester
      } else {
        navigate("/homeVolunteer", { state: { user: user } }); // Se tiver CNPJ, vai para HomeRequester

      }
    }
  };
  
  

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Tittle text="Login" position="center" />

        <Input
          text="Email"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          text="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="Entrar" type="submit" />

        {/* Botão de inscrição que leva para a página de cadastro */}
        <button
          type="button"
          className="mt-4 text-500 hover:underline"
          onClick={() => navigate("/signup")}
        >
          Ainda não tem uma conta? Inscreva-se
        </button>
      </form>
    </div>
  );
};

export default Login;
