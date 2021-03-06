"use strict";

// Requires
const express = require("express");
const bodyParser = require("body-parser");

// Ejecutar express

const app = express();

// Cargar archivos de rutas

const user_routes = require("./routes/user");
const topic_routes = require("./routes/topic");
const comment_routes = require("./routes/comment");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Reescribir rutas

app.use("/api", user_routes); // Se le adiciona 'api' a las rutas de user
app.use("/api", topic_routes); // Se le adiciona 'api' a las rutas de user
app.use("/api", comment_routes); // Se le adiciona 'api' a las rutas de user

// //Ruta / metodo de prueba
// app.get("/prueba", (req, res) => {
//   return res.status(200).send("<h1>Hola Mundo</h1>");
//   return res.status(200).send({
//     nombre: "raul martinez",
//     message: "hola mundo desde el backend con node",
//   });
// });

// app.post("/prueba", (req, res) => {
//   return res.status(200).send({
//     nombre: "raul martinez",
//     message: "Hola mundo desde el backend con node soy un metodo post",
//   });
// });

//Exportar el modulo
module.exports = app;
