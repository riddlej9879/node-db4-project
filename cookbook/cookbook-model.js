const db = require("../data/config");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("cookbook as cb")
    .join("ingredients as i", "cb.ingredient_id", "i.id")
    .select(
      "i.ingredient_name",
      "cb.quantity",
      "cb.measurement",
      "cb.recipe_id"
    )
    .where("cb.recipe_id", recipe_id);
}

function getInstructions(recipe_id) {
  return db("steps as s")
    .join("recipes as r", "s.recipe_id", "r.id")
    .select("r.recipe_name", "s.step", "s.recipe_id", "r.id")
    .where("r.id", recipe_id);
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
