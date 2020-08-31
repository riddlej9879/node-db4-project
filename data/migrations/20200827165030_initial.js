exports.up = async function (knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id");
    table.text("recipe_name", 128).notNull().unique();
  });
  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id");
    table.text("ingredient_name").notNull().unique();
  });
  await knex.schema.createTable("steps", (table) => {
    table.increments("id");
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table.text("step").notNull();
  });
  // One table to bring them all together
  await knex.schema.createTable("cookbook", (table) => {
    table.increments("id");
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("ingredient_id")
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.float("quantity").notNull();
    table.text("measurement").notNull();
    // table.integer("recipe_id")
    //      .references("id")
    //      .inTable("steps")
    //      .onDelete("CASCADE")
    //      .onUpdate("CASCADE")
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cookbook");
  await knex.schema.dropTableIfExists("steps");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
