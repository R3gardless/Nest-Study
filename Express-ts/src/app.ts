import * as express from "express";
import catRouter from "./cats/cats.route";

const app: express.Express = express();

// Logging Middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("This is Logging Middleware");
  next();
});

// JSON Middleware
app.use(express.json());

// Router = Router just Middleware
app.use(catRouter);

// 404 Middleware
app.use((req, res, next) => {
  console.log("This is Logging Middleware");
  res.send({ error: "404 Not Found Error" });
});

app.listen(8000, () => {
  console.log("Server is on....");
});
