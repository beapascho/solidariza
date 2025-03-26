import React from "react";
import idosos from "../../assets/idosos.png";
import animais from "../../assets/animais.png";
import criancas from "../../assets/criancas.png";
import meioambiente from "../../assets/meioambiente.png";
import educacao from "../../assets/educacao.png";
import saude from "../../assets/saude.png";
import { useLocation, useNavigate } from "react-router-dom"; 

const categories = [
  { name: "Idosos", image: idosos },
  { name: "Animais", image: animais },
  { name: "Crianças", image: criancas },
  { name: "Meio Ambiente", image: meioambiente },
  { name: "Educação", image: educacao },
  { name: "Saúde e Bem-Estar", image: saude },
];

const HomeRequester = () => {
  const navigate = useNavigate(); // 👈 hook para navegação

  const location = useLocation();
  const user = location.state?.user;

  console.log("usee", user);
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Inscrever Novo Evento ou Projeto</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-6 w-full max-w-7xl mx-auto px-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 flex items-center justify-center"
            style={{ width: "400px", height: "250px" }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="absolute top-0 left-0 w-full h-full object-cover"
              onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x250")}
            />

            <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-white text-xl font-semibold">{category.name}</h2>
              <button
                className="mt-3 bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition"
                onClick={() =>
                  navigate("/listEventRequester", {
                    state: {
                      categoria: category.name,
                      user: user, // 👈 Pegando o nome da instituição
                    },
                  })
                }
                
                                >
                Inscrever
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeRequester;