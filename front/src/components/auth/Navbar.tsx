import React from "react";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav>
      <h1>Minha Aplicação</h1>
      {user ? (
        <>
          <span>Bem-vindo, {user.name}!</span>
          <button onClick={signOut}>Sair</button>
        </>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
};

export default Navbar;
