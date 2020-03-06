const db = require("../data/config");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db("recipes")
}

function getShoppingList(id) {
    return db("recipe_ingredients as ri")
        .join("recipes as r", "r.id", "ri.recipe_id")
        .join("ingredients as i", "i.id", "ri.ingredient_id")
        .where("r.id", id)
        .select("r.name as recipe", "i.name", "ri.quantity")
}

function getInstructions(id) {
    return db("steps as s")
        .join("recipes as r", "r.id", "s.recipe_id")
        .where("r.id", id)
        .select("s.id as step",
            "r.name as recipe",
            "s.step as instruction")
        .orderBy("s.id")
}
