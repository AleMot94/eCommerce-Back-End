import express from "express";
const app = express();
const puerto = process.env.PORT ?? 8080;

const server = app.listen(puerto, () => {
  console.log(`conectado al puerto ${server.address().port}`);
});
server.on("error", (error) => {
  console.log(`error en el servidor ${error}`);
});
