const express = require("express");

const db = require("./cookbook-model");

const router = express.Router({
  mergeParams: true,
});

router.get("/", async (req, res, next) => {
  try {
    const data = await db.getRecipes();
    res.json(data);
  } catch (err) {
    next(err);
  }
});
router.get("/:id/shopping_list", async (req, res, next) => {
  try {
    const data = await db.getShoppingList(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});
router.get("/:id/instructions", async (req, res, next) => {
  try {
    const data = await db.getInstructions(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
