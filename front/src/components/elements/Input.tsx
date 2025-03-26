import React from "react";

interface InputProps { 
    text?: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ text, type, placeholder, value, onChange }) => {
    return ( 
        <div className="flex flex-col">
            {text && <label className="mb-1 text-sm font-medium text-gray-700 text-left">{text}</label>}
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left shadow-none"
            />
        </div>
    );
};

export default Input;
