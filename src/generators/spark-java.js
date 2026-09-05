// ================================
// SPARK (Java) GENERATOR
// ================================

function generateSparkJava(rota, modelName) {
    const modelUpper = modelName.charAt(0).toUpperCase() + modelName.slice(1);

    return `import static spark.Spark.*;
import com.google.gson.*;
import java.sql.*;
import java.util.*;

// ⚠️ Substitua [sua tabela aqui] pelo nome real da sua tabela
// ⚠️ Configure sua conexão JDBC antes de usar estas rotas
// ⚠️ Adicione spark-core e gson no seu pom.xml

public class ${modelUpper}Routes {
    public static void main(String[] args) {
        port(4567);
        Gson gson = new Gson();

        // GET ALL
        get("${rota}", (req, res) -> {
            res.type("application/json");
            String sql = "SELECT * FROM [sua tabela aqui]";
            // sua logica aqui
            return gson.toJson(Map.of("mensagem", "GET ALL - implemente sua logica"));
        });

        // GET BY ID
        get("${rota}/:id", (req, res) -> {
            res.type("application/json");
            String id  = req.params(":id");
            String sql = "SELECT * FROM [sua tabela aqui] WHERE id = ?";
            // sua logica aqui
            return gson.toJson(Map.of("mensagem", "GET BY ID - implemente sua logica", "id", id));
        });

        // POST
        post("${rota}", (req, res) -> {
            res.type("application/json");
            Map<String, String> dados = gson.fromJson(req.body(), Map.class);
            String nome  = dados.get("nome");
            String email = dados.get("email");
            String sql   = "INSERT INTO [sua tabela aqui] (nome, email) VALUES (?, ?)";
            // sua logica aqui
            res.status(201);
            return gson.toJson(Map.of("mensagem", "POST - implemente sua logica"));
        });

        // PUT
        put("${rota}/:id", (req, res) -> {
            res.type("application/json");
            String id    = req.params(":id");
            Map<String, String> dados = gson.fromJson(req.body(), Map.class);
            String nome  = dados.get("nome");
            String email = dados.get("email");
            String sql   = "UPDATE [sua tabela aqui] SET nome = ?, email = ? WHERE id = ?";
            // sua logica aqui
            return gson.toJson(Map.of("mensagem", "PUT - implemente sua logica", "id", id));
        });

        // DELETE
        delete("${rota}/:id", (req, res) -> {
            res.type("application/json");
            String id  = req.params(":id");
            String sql = "DELETE FROM [sua tabela aqui] WHERE id = ?";
            // sua logica aqui
            res.status(204);
            return "";
        });

        System.out.println("Servidor rodando em http://localhost:4567");
    }
}
`;
}

module.exports = { generateSparkJava };