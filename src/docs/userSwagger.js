/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             examples:
 *               listaUsuarios:
 *                 summary: Exemplo de lista de usuários
 *                 value:
 *                   - id: 1
 *                     name: João Silva
 *                     email: joao.silva@email.com
 *                   - id: 2
 *                     name: Maria Oliveira
 *                     email: maria@email.com
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             examples:
 *               usuario:
 *                 summary: Exemplo de usuário
 *                 value:
 *                   id: 1
 *                   name: João Silva
 *                   email: joao.silva@email.com
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           examples:
 *             atualizarUsuario:
 *               summary: Exemplo de atualização de usuário
 *               value:
 *                 name: Maria Oliveira
 *                 email: maria@email.com
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
