const express = require("express");
const app = express();
const PORT = 4000;
const sequelize = require("../db/database")
const bodyParser = require ('body-parser') 
const cors = require('cors')
const Usuarios = require ('../db/model/usuarios.js')
const bcrypt = require('bcrypt')

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: false}));

const jwt = require('jsonwebtoken')

app.post("/login", (req, res) => {
    const nombreUsuario = req.body.nombreUsuario
    const contrasena = req.body.nombreUsuario
  });




app.get("/api/users", (req, res) => {
  const listaUsuario = Usuarios.findAll().then(nombreUsuario=>{
        res.json( nombreUsuario )
        console.log(listaUsuario)
    })
})


  

app.post("/api/users", async (req, res) => {
  let contrasena = req.body.contrasena
  let contrasenaHash = await bcrypt.hash(contrasena, 8)

  try {
    
    Usuarios.create({
      apellido: req.body.apellido,
      nombre: req.body.nombre,
      nombreUsuario: req.body.nombreUsuario,
      contrasena: contrasenaHash,
      recontrasena: req.body.recontrasena,
      pais: req.body.pais,
      ciudad: req.body.ciudad
    }).then((usuario) => {
      res.json(usuario);
      console.log(req.body);
    });

  } catch (error){
    res.status(400).json({msg:"Ocurrio un error"})
  }
});
  


app.get("/api/:username/messages/inbox", (req, res) => {
    res.send(req.params.username);
  });

app.get("/api/:username/messages/sent", (req, res) => {
    res.send(req.params.username);
  });


app.get("/api/:username/messages/", (req, res) => {
    res.send(req.params.username);
  });




app.listen(PORT, () => console.log('servidor iniciado en ', PORT))

sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Conexion exitosa");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });