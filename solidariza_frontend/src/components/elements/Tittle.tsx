import React from "react";

interface TittleProps {
  text: string;
  position: "left" | "center"; // Define que a posição pode ser 'left' ou 'center'
}

const Tittle: React.FC<TittleProps> = ({ text, position }) => {
  // Definir classe de alinhamento com base na posição
  const alignmentClass = position === "center" ? "text-center" : "text-left";

  return (
    <div className={`w-full ${alignmentClass} pb-6`}> {/* Aumentei o padding-bottom */}
      <h1 className="text-2xl font-bold text-black">{text}</h1>
    </div>
  );
};

export default Tittle;
