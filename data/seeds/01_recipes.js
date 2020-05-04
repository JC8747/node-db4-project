exports.seed = async function(knex) {
    await knex("recipes").insert([
      { recipe_name: "Ice Cream Sandwich" },
      { recipe_name: "Cereal" }
    ]);
  };