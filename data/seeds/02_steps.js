exports.seed = async function(knex) {
    await knex("steps").insert([
        { step: "pour cereal", recipe_id: 1 },
        { step: "pour milk", recipe_id: 1 },
        { step: "enjoy", recipe_id: 1 },
        { step: "Turn on burner", recipe_id: 2 },
        { step: "lay bacon in pan", recipe_id: 2 },
        { step: "watch out for grease", recipe_id: 2 }
    ])
};
