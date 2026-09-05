# Albertool Basic | CRUD Generator — Routes Only

---

> [!CAUTION]
> ## ⚠️ NOT FOR PRODUCTION USE
>
> This package generates a **skeleton only** — it is designed for **students and beginners** who want to see how routes are structured.
>
> **Do NOT use this in production without:**
> - Replacing raw queries with **prepared statements**
> - Adding **data validation** and **sanitization**
> - Implementing **authentication and authorization**
> - Setting up **proper error handling**
> - **Auditing every line** of generated code
>
> 🔒 **Security is your responsibility. This tool does none of it.**

---

> [!WARNING]
> ## ⚙️ YOU MUST INSTALL DEPENDENCIES MANUALLY
>
> This tool generates the route file only. **It does not install anything for you.**
>
> You are responsible for setting up your own environment and installing the dependencies your project needs.
>
> ### JavaScript / TypeScript (Node.js required)
> ```bash
> npm init -y
> npm install express
> npm install mysql2       # or pg, sqlite3 — your choice
> npm install dotenv
> # TypeScript only:
> npm install -D typescript ts-node @types/express @types/node
> ```
>
> ### PHP (PHP + Composer required)
> ```bash
> composer require slim/slim slim/psr7
> ```
>
> ### Java (JDK + Maven required)
> Add to your `pom.xml`:
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
> ### What you need installed on your machine
> | Framework | Requires |
> |-----------|----------|
> | JavaScript (Express) | Node.js |
> | TypeScript (Express) | Node.js |
> | PHP (Slim) | PHP + Composer |
> | Java (Spark) | JDK 11+ + Maven |
>
> **No Docker, no magic, no auto-install. You set up your environment.**

---

## 🎯 What is this?

**Albertool Basic** is a CLI tool that generates a simple route file with GET, GET by ID, POST, PUT and DELETE — nothing more.

No controllers. No services. No repositories. No architecture. No magic.

Just the routes. **You write the logic. You connect the database. You audit the code.**

This tool exists for one reason: to help students who are just starting out see how routes are structured across different frameworks — without drowning in boilerplate.

---

## 📦 Installation & Usage

**Run directly without installing:**
```bash
npx albertool-basic
```

**Or install globally:**
```bash
npm i -g albertool-basic
albertool-basic
```

---

## 🚀 Supported Frameworks

| Language   | Framework |
|------------|-----------|
| JavaScript | Express   |
| TypeScript | Express   |
| PHP        | Slim      |
| Java       | Spark     |

---

## 📁 What gets generated?

A **single route file** with five endpoints:

```
GET    /yourmodel       → list all
GET    /yourmodel/:id   → get by id
POST   /yourmodel       → create
PUT    /yourmodel/:id   → update
DELETE /yourmodel/:id   → delete
```

That's it. No folders. No layers. No extra files.

---

## ⚠️ What this does NOT generate

- ❌ Controllers
- ❌ Services
- ❌ Repositories
- ❌ Database connection
- ❌ Authentication
- ❌ Validation
- ❌ Tests
- ❌ Production-ready anything

---

## 👨‍🎓 Who is this for?

- Students learning backend for the first time
- Developers who want a quick route skeleton for a POC
- Anyone who wants to study route structure across frameworks

**Use it. Study it. Adapt it. Don't ship it as-is.**

---

## 📄 License

MIT

---

Made with ❤️ by Albertão 🇧🇷