const fs = require('fs');
const path = require('path');

const { generateExpressJS } = require('./generators/express-js');
const { generateExpressTS } = require('./generators/express-ts');
const { generateSlimPHP }   = require('./generators/slim-php');
const { generateSparkJava } = require('./generators/spark-java');

const EXTENSIONS = {
    'JavaScript (Express)': 'js',
    'TypeScript (Express)': 'ts',
    'PHP (Slim)':           'php',
    'Java (Spark)':         'java',
};

function generate(framework, rota, modelName) {
    let content = '';

    switch (framework) {
        case 'JavaScript (Express)':
            content = generateExpressJS(rota, modelName);
            break;
        case 'TypeScript (Express)':
            content = generateExpressTS(rota, modelName);
            break;
        case 'PHP (Slim)':
            content = generateSlimPHP(rota, modelName);
            break;
        case 'Java (Spark)':
            content = generateSparkJava(rota, modelName);
            break;
        default:
            throw new Error(`Framework não suportado: ${framework}`);
    }

    const ext      = EXTENSIONS[framework];
    const fileName = `${modelName.toLowerCase()}.routes.${ext}`;
    const outPath  = path.join(process.cwd(), fileName);

    fs.writeFileSync(outPath, content, 'utf8');

    return { fileName, outPath };
}

module.exports = { generate, EXTENSIONS };