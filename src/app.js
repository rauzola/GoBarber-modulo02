const expres = require("express");
const routes = require("./routes");

class App {
  constructor() {
    this.server = expres();

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(expres.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
