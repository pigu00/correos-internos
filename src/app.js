const express = require("express");
const app = express();
const PORT = 4000;
const sequelize = require("../db/database")
// const bodyParse = require ('body-parse') 
const cors = require('cors')
const Usuarios = require ('../db/model/usuarios.js')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParse.urlencoded({extended: true}));



app.post("/login", (req, res) => {
    res.send("login");
  });

app.get("/api/users", (req, res) => {
  const listaUsuario = Usuarios.findAll().then(nombreUsuario=>{
        res.json( nombreUsuario )
        console.log(listaUsuario)
    })
})


  

app.post("/api/users", (req, res) => {
  Usuarios.create({
    apellido: req.body.apellido,
    nombre: req.body.nombre,
    nombreUsuario: req.body.nombreUsuario,
    contrasena: req.body.contrasena,
    recontrasena: req.body.recontrasena,
    pais: req.body.pais,
    ciudad: req.body.ciudad
  }).then((usuario) => {
    res.json(usuario);
    console.log(req.body);
  });
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