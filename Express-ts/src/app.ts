import * as express from "express";
import catRouter from "./cats/cats.route";

// Singleton Pattern
// Efficient Memory Usage
class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    // Router = Router just Middleware
    this.app.use(catRouter);
  }

  private setMiddleware() {
    // Logging Middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("This is Logging Middleware");
      next();
    });

    // JSON Middleware
    this.app.use(express.json());

    this.setRoute();

    // 404 Middleware
    this.app.use((req, res, next) => {
      console.log("This is Logging Middleware");
      res.send({ error: "404 Not Found Error" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("Server is on....");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
