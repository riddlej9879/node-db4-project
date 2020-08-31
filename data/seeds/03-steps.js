exports.seed = async function (knex) {
  await knex("steps").insert([
    {
      recipe_id: 1,
      step: "Heat oil in pan, on medium heat.",
    },
    {
      recipe_id: 1,
      step:
        "Drop egg into pan, cook until edges bubble and become golden brown.",
    },
    {
      recipe_id: 1,
      step: "Garnish with salt and pepper.",
    },
    {
      recipe_id: 2,
      step: "Boil water, add a dash of soy sauce and rice vinegar for flavor.",
    },
    {
      recipe_id: 2,
      step: "Add rice to water, DO NOT RINSE RICE!",
    },
    {
      recipe_id: 2,
      step:
        "Cover until water is completely absorbed into the rice and rice is al dente.",
    },
  ]);
};
