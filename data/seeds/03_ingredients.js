exports.seed = async function(knex) {
    await knex("ingredients").insert([
        { name: "Cereal" },
        { name: "Bacon" },
        { name: "Bowl" },
        { name: "Pan" },
        { name: "Milk" },
        { name: "Oven" }
    ])
};
