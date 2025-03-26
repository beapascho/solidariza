import React, { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Tittle from "../elements/Tittle";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cadastro:", { email, password, confirmPassword });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <Tittle text="Cadastro" position="center" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          placeholder="Crie uma senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          text="Confirme sua senha"
          type="password"
          placeholder="Digite a senha novamente"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button text="Criar Conta" type="submit" />
      </form>
    </div>
  );
};

export default Signup;
