// src/models/Event.ts
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Event extends Model {
  public id!: number;
  public nome!: string;
  public cidade!: string;
  public rua!: string;
  public numero!: number;
  public complemento!: string;
  public emailContato!: string;
  public numeroContato!: string;
  public descricao!: string;
  public dataEvento!: Date;
  public horarioInicio?: string;
  public horarioFim?: string;
  public semHorario!: boolean;
  public duracao!: string;
  public categoria!: string;
  public instituicao!: string;
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emailContato: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroContato: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dataEvento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    horarioInicio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    horarioFim: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    semHorario: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    duracao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instituicao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
  {
    sequelize,
    tableName: "Events",
    timestamps: true,
  }
);
