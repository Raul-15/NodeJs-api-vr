"use strict";

const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3999;

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/api_rest_node", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(
      "La conexion a la base de datos de mongo se ha realizado correctamente!"
    );

    // Crear el servidor
    app.listen(port, () => {
      console.log("El servidor http://localhost:3999 esta funcionando ");
    });
  })
  .catch(error => console.log(error));
