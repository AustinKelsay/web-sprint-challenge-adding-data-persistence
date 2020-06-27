
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
      {
        project_name: "Complete Lambda curriculum", 
        project_description: "Before I can get endorsment and start in Lambda X I need to complete the curriculum material!",
        project_completed: false,
      },
      {
        project_name: "Finish my portfolio", 
        project_description: "I need to get my portfolio up to snuff so I can start adding my projects and sending it out with my resume to apply for JR dev positions",
        project_completed: false,
      },
      ]);
    });
};
