exports.seed = async function(knex) {
    await knex("recipes").insert([
        { name: "Cereal" },
        { name: "Bacon" },
    ])
};
