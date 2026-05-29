import express from "express";

const app = express();
const users = [];
// tipo de rota/metodo HTTP
app.post("/usuarios", (req, res) => {
  console.log(req);

  res.send("ok, deu certo!");
});

app.get("/usuarios", (req, res) => {
  //enviando uma resposta
  res.send("ok, deu certo!");
});

app.listen(3000);

/* Criar API de usuario


  -Criar um usuario
  -Listar todos os usuarios
  -Editar um usuarios
  -Deletar um usuarios
*/
