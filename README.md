# Albertool Basic | Gerador de CRUD — Somente Rotas

---

> [!CAUTION]
> ## ⚠️ NÃO USE EM PRODUÇÃO
>
> Este pacote gera apenas um **esqueleto** — foi feito para **estudantes e iniciantes** que querem ver como as rotas são estruturadas.
>
> **NÃO use em produção sem antes:**
> - Substituir as queries brutas por **prepared statements**
> - Adicionar **validação e sanitização** dos dados
> - Implementar **autenticação e autorização**
> - Configurar um **tratamento de erros adequado**
> - **Auditar cada linha** do código gerado
>
> 🔒 **Segurança é sua responsabilidade. Essa ferramenta não faz nada disso.**

---

> [!WARNING]
> ## ⚙️ VOCÊ PRECISA INSTALAR AS DEPENDÊNCIAS MANUALMENTE
>
> Essa ferramenta gera apenas o arquivo de rotas. **Ela não instala nada pra você.**
>
> Você é responsável por configurar seu ambiente e instalar as dependências que seu projeto precisa.
>
> ### JavaScript / TypeScript (requer Node.js)
> ```bash
> npm init -y
> npm install express
> npm install mysql2       # ou pg, sqlite3 — sua escolha
> npm install dotenv
> # Somente TypeScript:
> npm install -D typescript ts-node @types/express @types/node
> ```
>
> ### PHP (requer PHP + Composer)
> ```bash
> composer require slim/slim slim/psr7
> ```
>
> ### Java (requer JDK + Maven)
> Adicione no seu `pom.xml`:
> ```xml
> <dependency>
>     <groupId>com.sparkjava</groupId>
>     <artifactId>spark-core</artifactId>
>     <version>???</version>
> </dependency>
> <dependency>
>     <groupId>com.google.code.gson</groupId>
>     <artifactId>gson</artifactId>
>     <version>???</version>
> </dependency>
> ```
>
> ### O que você precisa ter instalado na máquina
> | Framework | Requer |
> |-----------|--------|
> | JavaScript (Express) | Node.js |
> | TypeScript (Express) | Node.js |
> | PHP (Slim) | PHP + Composer |
> | Java (Spark) | JDK 11+ + Maven |
>
> **Sem Docker, sem mágica, sem instalação automática. Você configura o ambiente.**

---

## 🎯 O que é isso?

**Albertool Basic** é uma ferramenta CLI que gera um arquivo de rotas simples com GET, GET por ID, POST, PUT e DELETE — nada mais.

Sem controllers. Sem services. Sem repositories. Sem arquitetura. Sem mágica.

Só as rotas. **Você escreve a lógica. Você conecta o banco. Você audita o código.**

Essa ferramenta existe por um motivo: ajudar quem tá começando a entender como as rotas são estruturadas em diferentes frameworks — sem se afogar em boilerplate.

---

## 📦 Instalação & Uso

**Rode direto sem instalar:**
```bash
npx albertool-basic
```

**Ou instale globalmente:**
```bash
npm i -g albertool-basic
albertool-basic
```

---

## 🚀 Frameworks Suportados

| Linguagem  | Framework |
|------------|-----------|
| JavaScript | Express   |
| TypeScript | Express   |
| PHP        | Slim      |
| Java       | Spark     |

---

## 📁 O que é gerado?

Um **único arquivo de rotas** com cinco endpoints:

```
GET    /seumodelo       → lista todos
GET    /seumodelo/:id   → busca por ID
POST   /seumodelo       → cria
PUT    /seumodelo/:id   → atualiza
DELETE /seumodelo/:id   → deleta
```

Só isso. Sem pastas. Sem camadas. Sem arquivos extras.

---

## ⚠️ O que NÃO é gerado

- ❌ Controllers
- ❌ Services
- ❌ Repositories
- ❌ Conexão com banco de dados
- ❌ Autenticação
- ❌ Validação
- ❌ Testes
- ❌ Nada pronto pra produção

---

## 👨‍🎓 Pra quem é isso?

- Estudantes aprendendo backend pela primeira vez
- Devs que querem um esqueleto de rotas rápido pra um POC
- Qualquer pessoa que queira estudar a estrutura de rotas em diferentes frameworks

**Use. Estude. Adapte. Não sobe em produção do jeito que tá.**

---

## 📄 Licença

MIT

---

Feito com ❤️ por Albertão 🇧🇷