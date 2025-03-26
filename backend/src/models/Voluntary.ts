import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Voluntary extends Model {
  public id!: number; // Agora só há um ID principal
  public name!: string;
  public email!: string;
  public password!: string;
  public cpf!: string;
  public contact_number!: string;
  public birth_date!: Date;
  public cep!: string;
}

Voluntary.init(
  {
    id: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true 
    },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
    contact_number: { type: DataTypes.STRING, allowNull: false },
    birth_date: { type: DataTypes.DATE, allowNull: false },
    cep: { type: DataTypes.STRING, allowNull: false },
    
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  { sequelize, tableName: "Users", timestamps: true }
);
