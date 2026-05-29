import express from "express";

const app = express();
app.use(express.json());
const users = [];
// tipo de rota/metodo HTTP
// Criar um usuario
app.post("/usuarios", (req, res) => {
  users.push(req.body);
  //enviando uma resposta
  res.status(201).json(req.body);
});
// Listar todos os usuarios
app.get("/usuarios", (req, res) => {
  //enviando uma resposta
  res.status(200).json(users);
});

app.listen(3000);

/* Criar API de usuario


  
  -
  
  -Deletar um usuarios
*/
// banco de dados, EmmanuelBoni_db_user,botezTb28Yi3FkJb
