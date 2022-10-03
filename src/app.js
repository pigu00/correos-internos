const express = require("express");
const app = express();
const PORT = 4000;
const sequelize = require("../db/database")
// const bodyParse = require ('body-parse') 
const cors = require('cors')
 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParse.urlencoded({extended: true}));



app.post("/login", (req, res) => {
    res.send("login");
  });

app.get("/api/users", (req, res) => {
  res.status(200).json({
    apellido: "lopez",
    nombre:"horacio",
    usuario:"horacio lopez",
    contrasena:"1234",
    recontrasena:"1234",
    pais:"argentina"
    })
  });

app.post("/api/users", (req, res) => {
    req.params.apellido
    console.log(req.params.apellido)
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

// sequelize
//     .sync({ force: true })
//     .then(() => {
//       console.log("Conexion exitosa");
//     })
//     .catch((error) => {
//       console.log("Se ha producido un error", error);
//     });