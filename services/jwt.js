"use strict";

const jwt = require("jwt-simple");
const moment = require("moment");

exports.createToken = function (user) {
  let payload = {
    // SE ENVIARA AL CLIENTE PARA QUE LO PERSISTA
    sub: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    role: user.role,
    image: user.image,
    iat: moment().unix(),
    exp: moment().add(30, "days").unix,
  };
  return jwt.encode(payload, "clave-secreta-para-generar-el-token-9999");
};
