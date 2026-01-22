import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0', // Specify OpenAPI version
    info: {
      title: 'API NODE',
      version: '1.0.0',
      description: 'Uma documentação simples da API Express',
    },
    servers: [
      {
        url: 'http://localhost:3000', description: "Servidor Local",
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/docs/*.js'], // Path to the API route files (glob pattern supported)
};

export const  swaggerSpec = swaggerJsdoc(options);
