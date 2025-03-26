import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseRole from "./components/auth/ChoosePlan";
import SignupVolunteer from "./components/auth/SignupVolunteer";
import SignupRequester from "./components/auth/SignUpRequester";
import Login from "./components/auth/Login";
import Navbar from "./components/auth/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import Background from "./components/elements/Background";
import homeImage from "./assets/home.png";
import HomeVolunteer from "./components/structure/HomeVolunteer";
import HomeRequester from "./components/structure/HomeRequester";
import ListEventRequester from "./components/structure/ListEventRequester";
import NewEventRequester from "./components/structure/NewEventRequester";
import ListEventVolunteer from "./components/structure/ListEventVolunteer";



function App() {
  return (
    <Router>
      <Routes>
        {/* Páginas que devem ter a imagem de fundo */}
        <Route
          path="/"
          element={
            <Background image={homeImage}>
                   <Login />

            </Background>
          }
        />
        <Route
          path="/login"
          element={
            <Background image={homeImage}>
              <Login />
            </Background>
          }
        />
        <Route
          path="/signup"
          element={
            <Background image={homeImage}>
              <ChooseRole />
            </Background>
          }
        />
        <Route
          path="/signup/volunteer"
          element={
            <Background image={homeImage}>
              <SignupVolunteer />
            </Background>
          }
        />
        <Route
          path="/signup/requester"
          element={
            <Background image={homeImage}>
              <SignupRequester />
            </Background>
          }
        />

        {/* Páginas que NÃO devem ter imagem de fundo */}
        <Route path="/homeVolunteer" element={<HomeVolunteer />} />
        <Route path="/homeRequester" element={<HomeRequester />} />
        <Route path="/listEventRequester" element={<ListEventRequester />} />
        <Route path="/newEventRequester" element={<NewEventRequester />} />
        <Route path="/listEventVolunteer" element={<ListEventVolunteer />} />


        {/* Página protegida */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<h1 className="text-4xl font-bold">Página Protegida</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
