const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hola desconocido!</h1>`);
});

app.get("/makers/:name", (req, res) => {
  const capture = req.params.name;
  function capitalizarPrimeraLetra(capture) {
    return capture.charAt(0).toUpperCase() + capture.slice(1);
  }
  res.send(`<h1>Hola ${capitalizarPrimeraLetra(capture)}!</h1>`);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
