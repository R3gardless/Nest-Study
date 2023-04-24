import { Cat, CatType } from "./cats.model"; // 상대 경로
import { Router } from "express";
import {
  readAllCats,
  readCat,
  createCat,
  updateCat,
  updatePartCat,
  deleteCat,
} from "./cats.service";
const router = Router();

// Top-Bottom Router Search
// READ Every Cat
router.get("/cats", readAllCats);
// READ Certain Cat using id
router.get("/cats/:id", readCat);
// CREATE New Cat
router.post("/cats", createCat);
// UPDATE certain Cat entire
router.put("/cats/:id", updateCat);
// UPDATE certain Cat part
router.patch("/cats/:id", updatePartCat);
// DELETE certain Cat
router.delete("/cats/:id", deleteCat);

export default router;
