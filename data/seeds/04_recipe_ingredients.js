exports.seed = async function(knex) {
    await knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 12.3 },
        { recipe_id: 1, ingredient_id: 3, quantity: 2.2 },
        { recipe_id: 1, ingredient_id: 5, quantity: 14.2 },
        { recipe_id: 2, ingredient_id: 2, quantity: 25.3 },
        { recipe_id: 2, ingredient_id: 4, quantity: 125.2 },
        { recipe_id: 2, ingredient_id: 6, quantity: .2 }
    ])
};
