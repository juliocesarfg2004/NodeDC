import express from "express";
import usuariosRoute from './routes/usuariosRoute.js'

// app recebe as funcionalidades do express
const app = express();
app.use(express.json())

const port = 3000;

// Usar rotas em usuários routes
app.use('/users', usuariosRoute)

app.get("/", (req, res) => {
  res.send("Hello wolrd");
});

// Escutar o servidor - Recebe 2 parâmetros
app.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`));
