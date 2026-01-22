import express from "express";
import usuariosRoute from './routes/usuariosRoute.js'
import produtosRoute from './routes/produtosRoute.js'
import categoriasRoute from './routes/categoriasRoute.js'
import authRoute from './routes/authRoute.js'
import { authMiddleware } from "./middleware/authMiddleware.js";
import cors from 'cors'
import { swaggerSpec } from "./docs/swagger.js";
import swaggerUI from "swagger-ui-express"

// app recebe as funcionalidades do express
const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}))

const port = 3000;

// Recebe 2 parâmetros - rota e arrow function
app.get("/", (_req, res) => {
  res.send("Hello wolrd");
});

// Serve Swagger UI at a specific endpoint
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Usar rotas em usuários routes
app.use('/users', authMiddleware ,usuariosRoute);
app.use('/products', authMiddleware, produtosRoute);
app.use('/categories', authMiddleware, categoriasRoute);
app.use('/auth', authRoute);

// Escutar o servidor - Recebe 2 parâmetros
app.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`));
app.listen(port, () => console.log(`Documentação rodando na porta http://localhost:${port}/api-docs`));
