const express = require("express");
const app = express();
const PORT = 4000;
const sequelize = require("../db/database")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post("/login", (req, res) => {
    res.send("login");
  });

app.get("/api/users", (req, res) => {
    res.send("users GET");
  });

app.post("/api/users", (req, res) => {
    res.send("users POST");
  });

app.get("/api/:id/messages/inbox", (req, res) => {
    res.send(req.params.id);
  });

app.get("/api/:id/messages/sent", (req, res) => {
    res.send(req.params.id);
  });


app.get("/api/:id/messages/", (req, res) => {
    res.send(req.params.id);
  });




app.listen(PORT, () => console.log('servidor iniciado en ', PORT))

sequelize
    .sync({ force: true })
    .then(() => {
      console.log("Conexion exitosa");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });