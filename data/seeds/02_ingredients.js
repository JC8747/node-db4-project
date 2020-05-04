exports.seed = async function(knex) {
    await knex("ingredients").insert([
      { name: "Cookies" },
      { name: "Ice Cream" },
      { name: "Cereal" },
      { name: "Milk" },
    ]);
  };