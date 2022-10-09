const express = require("express");
const app = express();
const PORT = 4000;
const sequelize = require("../db/database");
const bodyParser = require("body-parser");
const cors = require("cors");
const Usuarios = require("../db/model/usuarios.js");
const Mensajes = require("../db/model/mensajes.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", async (req, res) => {
  const nombreUsuario = req.body.nombreUsuario;
  const contrasena = req.body.contrasena;

  const users = await Usuarios.findAll();
  const selectedUser = users.find((element) => {
    return element.nombreUsuario === nombreUsuario;
  });
  console.log(selectedUser.nombreUsuario, selectedUser.contrasena )
  
});

  

// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.SECRET, { expiresIn: "15m" });
// }

// function validateToken(req, res,next){
// const accessToken=req.header['Autorizado']
// if (!accessToken) res.send ('Acceso denegado' )

// jwt.verify(accessToken,process.env.SECRET, (err, user)=>{
//   if(err){
//     res.send ('Acceso denegado, token invalido')
//   } else{
//     next()
//   }
// })
// }
///



app.get("/api/users", (req, res) => {
  const listaUsuario = Usuarios.findAll().then((nombreUsuario) => {
    res.json(nombreUsuario);
    // console.log(nombreUsuario);
  });
});

app.post("/api/users", async (req, res) => {
  let contrasena = req.body.contrasena;
  let contrasenaHash = await bcrypt.hash(contrasena, 8);

  try {
    Usuarios.create({
      apellido: req.body.apellido,
      nombre: req.body.nombre,
      nombreUsuario: req.body.nombreUsuario,
      contrasena: contrasenaHash,
      pais: req.body.pais,
      ciudad: req.body.ciudad,
    }).then((usuario) => {
      res.json(usuario);
    });
  } catch (error) {
    res.status(400).json({ msg: "Ocurrio un error" });
  }
});

app.get("/api/messages/inbox", (req, res) => {
  // res.send(console.log('acceso concedido'));
});

app.get("/api/messages/sent", (req, res) => {
  const listaMensajesEnviados = Mensajes.findAll().then((mensajesEnviados) => {
    res.json(mensajesEnviados);
    console.log(mensajesEnviados);
  });
});

app.post("/api/messages", (req, res) => {
  const listaUsuario = Usuarios.findAll().then((nombreUsuario) => {
    // res.json(nombreUsuario);

    // console.log(req.body)


    try {
      Mensajes.create({
        idusuario:req.body.idusuario,
        asunto: req.body.asunto,
        mensajeTexto: req.body.mensajeTexto,
        usuarioDestino : req.body.usuarioDestino
      }).then((mensaje) => {
        res.json(mensaje);
      });
    } catch (error) {
      res.status(400).json({ msg: "Ocurrio un error almacenando el mensaje" });
    }

  });
});

app.listen(PORT, () => console.log("servidor iniciado en ", PORT));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Conexion exitosa");
  })
  .catch((error) => {
    console.log("Se ha producido un error", error);
  });
