import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean; // Adicionando a propriedade disabled
}

const Button: React.FC<ButtonProps> = ({ text, type = "button", onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled} // Passando a propriedade disabled
      className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
