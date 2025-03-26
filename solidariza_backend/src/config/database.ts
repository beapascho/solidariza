import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  database: process.env.DB_NAME!,
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  host: process.env.DB_HOST!,
  dialect: "mssql",
  port: 1433, // Porta padrão do SQL Server (altere se necessário)
  dialectOptions: {
    options: {
      encrypt: false, // Defina como `true` se estiver usando Azure SQL
      enableArithAbort: true,
      trustServerCertificate: true, // Necessário para conexões locais
    },
  },
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("🟢 Conexão com o banco de dados bem-sucedida.");
  } catch (error) {
    console.error("🔴 Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
};
