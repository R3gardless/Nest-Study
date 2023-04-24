import * as express from "express";
import { Cat, CatType } from "./app.model"; // 상대 경로

const app: express.Express = express();

// Logging Middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("This is Logging Middleware");
  next();
});

// JSON Middleware
app.use(express.json());

// Top-Bottom Router Search
// READ Every Cat
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// READ Certain Cat using id
app.get("/cats/:id", (req, res) => {
  // dynamic routing :id
  try {
    const params = req.params.id;
    const cat = Cat.find((cat) => {
      return cat.id === params;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// CREATE New Cat
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);
    console.log(data);
    res.status(200).send({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// 404 Middleware
app.use((req, res, next) => {
  console.log("This is Logging Middleware");
  res.send({ error: "404 Not Found Error" });
});

app.listen(8000, () => {
  console.log("Server is on....");
});
