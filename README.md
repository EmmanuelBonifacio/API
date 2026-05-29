# API de Usuários

API REST para gerenciamento de usuários, construída com Node.js, Express e Prisma ORM com banco de dados MongoDB.

## Tecnologias

- **Node.js** — ambiente de execução JavaScript
- **Express 4** — framework para criação de rotas HTTP
- **Prisma 5** — ORM para comunicação com o banco de dados
- **MongoDB** — banco de dados NoSQL
- **dotenv** — gerenciamento de variáveis de ambiente

## Pré-requisitos

- Node.js instalado
- Conta no MongoDB Atlas (ou instância local do MongoDB)

## Instalação

```bash
npm install
npx prisma generate
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<banco>?appName=<app>"
```

## Executar o servidor

```bash
node --watch server.js
```

O servidor sobe na porta **3000**.

---

## Endpoints

### Criar usuário

```
POST /usuarios
```

**Body:**
```json
{
  "email": "exemplo@email.com",
  "name": "Nome do Usuário",
  "age": "25"
}
```

**Resposta (201):**
```json
{
  "email": "exemplo@email.com",
  "name": "Nome do Usuário",
  "age": "25"
}
```

---

### Listar todos os usuários

```
GET /usuarios
```

**Resposta (200):**
```json
[
  {
    "id": "6a19e455ed3d0882963e1764",
    "email": "exemplo@email.com",
    "name": "Nome do Usuário",
    "age": "25"
  }
]
```

---

### Editar usuário

```
PUT /usuarios/:id
```

**Parâmetro de URL:** `id` — ID do usuário a ser editado

**Body:**
```json
{
  "email": "novo@email.com",
  "name": "Novo Nome",
  "age": "30"
}
```

**Resposta (200):**
```json
{
  "id": "6a19e455ed3d0882963e1764",
  "email": "novo@email.com",
  "name": "Novo Nome",
  "age": "30"
}
```

---

### Deletar usuário

```
DELETE /usuarios/:id
```

**Parâmetro de URL:** `id` — ID do usuário a ser deletado

**Resposta (200):**
```json
{
  "message": "Usuario Deletado com Sucesso!"
}
```

---

## Modelo de dados

```prisma
model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
  name  String
  age   String
}
```
