exports.seed = function (knex) {
  return knex("recipes").insert([
    { recipe_name: "Fried Egg" },
    { recipe_name: "Steamed Rice" },
  ]);
};
