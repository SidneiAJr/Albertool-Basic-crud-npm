// ================================
// EXPRESS (TypeScript) GENERATOR
// ================================

function generateExpressTS(rota, modelName) {
    return `import { Router, Request, Response } from 'express';

const router = Router();

// ⚠️ Substitua [sua tabela aqui] pelo nome real da sua tabela
// ⚠️ Conecte seu banco de dados antes de usar estas rotas

// GET ALL
router.get('${rota}', (req: Request, res: Response) => {
    const sql = 'SELECT * FROM [sua tabela aqui]';
    // sua logica aqui
    res.json({ mensagem: 'GET ALL - implemente sua logica' });
});

// GET BY ID
router.get('${rota}/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM [sua tabela aqui] WHERE id = ?';
    // sua logica aqui
    res.json({ mensagem: 'GET BY ID - implemente sua logica', id });
});

// POST
router.post('${rota}', (req: Request, res: Response) => {
    const { nome, email } = req.body;
    const sql = 'INSERT INTO [sua tabela aqui] (nome, email) VALUES (?, ?)';
    // sua logica aqui
    res.status(201).json({ mensagem: 'POST - implemente sua logica' });
});

// PUT
router.put('${rota}/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    const sql = 'UPDATE [sua tabela aqui] SET nome = ?, email = ? WHERE id = ?';
    // sua logica aqui
    res.json({ mensagem: 'PUT - implemente sua logica', id });
});

// DELETE
router.delete('${rota}/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const sql = 'DELETE FROM [sua tabela aqui] WHERE id = ?';
    // sua logica aqui
    res.status(204).send();
});

export default router;
`;
}

module.exports = { generateExpressTS };