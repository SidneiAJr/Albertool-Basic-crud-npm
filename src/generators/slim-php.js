// ================================
// SLIM (PHP) GENERATOR
// ================================

function generateSlimPHP(rota, modelName) {
    return `<?php
require __DIR__ . '/vendor/autoload.php';

use Slim\\Factory\\AppFactory;
use Psr\\Http\\Message\\ResponseInterface as Response;
use Psr\\Http\\Message\\ServerRequestInterface as Request;

$app = AppFactory::create();

// ⚠️ Substitua [sua tabela aqui] pelo nome real da sua tabela
// ⚠️ Configure sua conexão PDO antes de usar estas rotas

// GET ALL
$app->get('${rota}', function (Request $request, Response $response) {
    $sql = "SELECT * FROM [sua tabela aqui]";
    // sua logica aqui
    $response->getBody()->write(json_encode(['mensagem' => 'GET ALL - implemente sua logica']));
    return $response->withHeader('Content-Type', 'application/json');
});

// GET BY ID
$app->get('${rota}/{id}', function (Request $request, Response $response, array $args) {
    $id = $args['id'];
    $sql = "SELECT * FROM [sua tabela aqui] WHERE id = ?";
    // sua logica aqui
    $response->getBody()->write(json_encode(['mensagem' => 'GET BY ID - implemente sua logica', 'id' => $id]));
    return $response->withHeader('Content-Type', 'application/json');
});

// POST
$app->post('${rota}', function (Request $request, Response $response) {
    $dados = $request->getParsedBody();
    $nome  = $dados['nome'];
    $email = $dados['email'];
    $sql = "INSERT INTO [sua tabela aqui] (nome, email) VALUES (?, ?)";
    // sua logica aqui
    $response->getBody()->write(json_encode(['mensagem' => 'POST - implemente sua logica']));
    return $response->withHeader('Content-Type', 'application/json')->withStatus(201);
});

// PUT
$app->put('${rota}/{id}', function (Request $request, Response $response, array $args) {
    $id    = $args['id'];
    $dados = $request->getParsedBody();
    $nome  = $dados['nome'];
    $email = $dados['email'];
    $sql = "UPDATE [sua tabela aqui] SET nome = ?, email = ? WHERE id = ?";
    // sua logica aqui
    $response->getBody()->write(json_encode(['mensagem' => 'PUT - implemente sua logica', 'id' => $id]));
    return $response->withHeader('Content-Type', 'application/json');
});

// DELETE
$app->delete('${rota}/{id}', function (Request $request, Response $response, array $args) {
    $id  = $args['id'];
    $sql = "DELETE FROM [sua tabela aqui] WHERE id = ?";
    // sua logica aqui
    $response->getBody()->write(json_encode(['mensagem' => 'DELETE - implemente sua logica', 'id' => $id]));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();
`;
}

module.exports = { generateSlimPHP };