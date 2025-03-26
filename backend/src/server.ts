import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import voluntaryRoutes from "./routes/voluntaryRoutes";
import requesterRoutes from "./routes/requesterRoutes";
import cors from "cors"; 

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*", // Permite todas as origens (para testes)
    credentials: true,
  })
);


app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/voluntary", voluntaryRoutes);
app.use("/requester", requesterRoutes); // Adicionando as rotas dos solicitantes


connectDB();

app.listen(5000, () => console.log("🚀 Servidor rodando na porta 5000"));
