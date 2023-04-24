import * as express from "express";
import { Cat, CatType } from "./app.model"; // 상대 경로

const app: express.Express = express();

app.use((req, res, next) => {
  // Middleware = Place on upper router
  // app.use = Every Router Middleware
  console.log(req.rawHeaders[1]);
  console.log("This is Logging Middleware");
  next();
});

app.get("/cats/som", (req, res, next) => {
  // app.get URL = Certain Router Middleware
  console.log("This is Som Middleware");
  next(); // Move to according url router
});

// Top-Bottom Router Search

app.get("/", (req: express.Request, res: express.Response) => {
  // router
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res, next: express.NextFunction) => {
  res.send({ blue: Cat[0] });
});

app.get("/cats/som", (req, res) => {
  res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
  // This Middleware Means Any Router didn't match req URL
  console.log("This is Logging Middleware");
  res.send({ error: "404 Not Found Error" });
});

app.listen(8000, () => {
  console.log("Server is on....");
});
