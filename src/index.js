import express from "express";
import usuariosRoute from './routes/usuariosRoute.js'
import produtosRoute from './routes/produtosRoute.js'
import categoriasRoute from './routes/categoriasRoute.js'

// app recebe as funcionalidades do express
const app = express();
app.use(express.json());

const port = 3000;

// Recebe 2 parâmetros - rota e arrow function
app.get("/", (_req, res) => {
  res.send("Hello wolrd");
});

// Usar rotas em usuários routes
app.use('/users', usuariosRoute);
app.use('/products', produtosRoute);
app.use('/categories', categoriasRoute);

// Escutar o servidor - Recebe 2 parâmetros
app.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`));
