const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Mensajes extends Model {}

Mensajes.init(
  {
    idmensajes: { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true },
    idusuario:DataTypes.INTEGER,
    asunto: DataTypes.STRING,
    mensajeTexto: DataTypes.STRING,
    usuarioDestino:DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "mensajes",
  }
);
module.exports = Mensajes;
