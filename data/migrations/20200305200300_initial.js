exports.up = async function(knex) {
    await knex.schema.createTable("recipes", table => {
            table.increments("id");
            table.text("name").notNullable()
        });
    await knex.schema.createTable("steps", table => {
            table.increments("id");
            table.text("step").notNullable();
            table.integer("recipe_id")
                .references("id")
                .inTable("recipes")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
    });

    await knex.schema.createTable("ingredients", table => {
            table.increments("id");
            table.text("name").notNullable().unique();
    });

    await knex.schema.createTable("recipe_ingredients", table => {
            table.integer("recipe_id")
                .references("id")
                .inTable("recipes")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.integer("ingredient_id")
                .references("id")
                .inTable("ingredients")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.float("quantity").notNullable();
            table.primary(["recipe_id", "ingredient_id"]);
    });

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients");
    await knex.schema.dropTableIfExists("ingredients");
    await knex.schema.dropTableIfExists("steps");
    await knex.schema.dropTableIfExists("recipes");
};
