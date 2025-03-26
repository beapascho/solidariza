import React, { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Tittle from "../elements/Tittle";
import { useNavigate } from "react-router-dom"; 
import { useRegisterVolunteer } from "../../hooks/useRegisterVolunteer"; // Importar o hook

const SignupVolunteer = () => {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const navigate = useNavigate(); 
  const { registerVolunteer, loading, error } = useRegisterVolunteer(); // Chamar o hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const volunteerData = {
      name: fullName,
      birth_date: birthDate,
      cpf,
      cep,
      email,
      password,
      contact_number: contactNumber,
    };

    const response = await registerVolunteer(volunteerData);

    if (response) {
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } else {
      alert(error || "Erro ao cadastrar voluntário");
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
          <Input text="Nome Completo" placeholder="Digite seu nome completo" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <Input text="Data de Nascimento" placeholder="Digite sua data de nascimento" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          <Input text="CPF" placeholder="Digite seu CPF" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <Input text="CEP" placeholder="Digite seu CEP" type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
          <Input text="E-mail" placeholder="Digite seu e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input text="Senha" placeholder="Crie uma senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input text="Número de Contato" placeholder="Digite seu número de contato" type="tel" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />

          <Button text={loading ? "Cadastrando..." : "Cadastrar"} type="submit" disabled={loading} />
        </form>

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default SignupVolunteer;
