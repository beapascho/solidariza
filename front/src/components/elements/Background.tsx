import React from "react";

interface BackgroundProps {
  image: string; // Caminho da imagem
  children: React.ReactNode; // Conteúdo dentro do fundo
}

const Background: React.FC<BackgroundProps> = ({ image, children }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      
      {/* Overlay Preto Semi-Transparente */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Conteúdo acima do fundo escuro */}
      <div className="relative bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        {children}
      </div>
      
    </div>
  );
};

export default Background;
