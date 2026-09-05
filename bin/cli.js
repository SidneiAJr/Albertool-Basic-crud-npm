#!/usr/bin/env node

const inquirer = require('inquirer');
const { generate, EXTENSIONS } = require('../src/index');

const BANNER = `
╔══════════════════════════════════════════════╗
║        Albertool Basic — CRUD Generator       ║
║         Routes only. No architecture.         ║
║   For students. Audit before using. Always.   ║
╚══════════════════════════════════════════════╝
`;

async function main() {
    console.log(BANNER);

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'framework',
            message: 'Qual framework?',
            choices: Object.keys(EXTENSIONS),
        },
        {
            type: 'input',
            name: 'modelName',
            message: 'Nome do modelo (ex: Usuario, Produto):',
            validate: (val) => val.trim() !== '' || 'O nome não pode ser vazio',
        },
        {
            type: 'input',
            name: 'rota',
            message: 'Rota base (ex: /usuarios):',
            default: (ans) => `/${ans.modelName.toLowerCase()}s`,
            validate: (val) => val.startsWith('/') || 'A rota deve começar com /',
        },
    ]);

    try {
        const { fileName, outPath } = generate(
            answers.framework,
            answers.rota,
            answers.modelName
        );

        console.log(`\n✅ Gerado: ${fileName}`);
        console.log(`📁 Salvo em: ${outPath}`);
        console.log(`\n⚠️  Lembre-se: conecte seu banco e implemente sua lógica antes de rodar.\n`);
    } catch (err) {
        console.error('❌ Erro ao gerar:', err.message);
        process.exit(1);
    }
}

main();