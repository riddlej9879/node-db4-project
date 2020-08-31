exports.seed = function (knex) {
  return knex("ingredients").insert([
    { ingredient_name: "Egg" },
    { ingredient_name: "Fat" },
    { ingredient_name: "Water" },
    { ingredient_name: "Short-Grain Rice" },
    { ingredient_name: "Canola Oil Spray" },
  ]);
};
