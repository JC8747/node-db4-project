exports.seed = async function(knex) {
    await knex("directions").insert([
      {
        direction_number: "1",
        instructions: "Scoop ice cream onto bottom of one cookie",
        recipe_id: 1
      },
      {
        direction_number: "2",
        instructions: "Place second cookie on top of ice cream",
        recipe_id: 1
      },
      {
        direction_number: "1",
        instructions: "Pour cereal into bowl",
        recipe_id: 2
      },
      {
        direction_number: "2",
        instructions: "Pour milk into cereral",
        recipe_id: 2
      },
    ]);
  };