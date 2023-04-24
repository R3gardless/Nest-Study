import { Cat, CatType } from "./cats.model"; // 상대 경로
import { Router } from "express";

const router = Router();

// Top-Bottom Router Search
// READ Every Cat
router.get("/cats", (req, res) => {
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
router.get("/cats/:id", (req, res) => {
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
router.post("/cats", (req, res) => {
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

export default router;
