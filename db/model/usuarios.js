const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Usuarios extends Model {}

Usuarios.init(
  {
    idusuario: { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true },
    nombre: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    pais: DataTypes.STRING
  },
  {
    sequelize,
    modelName: "usuarios",
  }
);
module.exports = Usuarios;
