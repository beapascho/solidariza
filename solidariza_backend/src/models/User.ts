import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public cnpj!: string; 

}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    cnpj: { type: DataTypes.STRING, allowNull: false, unique: true },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"), // Define a data atual ao criar
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"), 
    },

  },
  { sequelize, tableName: "Users", timestamps: true }
);

