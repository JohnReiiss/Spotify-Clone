const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Servindo arquivos estáticos
server.use("/images-api", jsonServer.defaults({ static: "images-api" }));

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
