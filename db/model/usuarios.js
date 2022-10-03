const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Usuarios extends Model {}

Usuarios.init(
  {
    idusuario: { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true },
    apellido:DataTypes.STRING,
    nombre: DataTypes.STRING,
    nombreUsuario: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    recontrasena: DataTypes.STRING,
    pais: DataTypes.STRING,
    ciudad: DataTypes.STRING
  },
  {
    sequelize,
    modelName: "usuarios",
  }
);
module.exports = Usuarios;
