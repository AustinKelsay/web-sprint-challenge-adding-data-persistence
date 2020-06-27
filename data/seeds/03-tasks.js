
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {projects_id: 1, task_description: "Completed node-db-challenge!", notes: "Need to get MVP with my submission and answer the self study questions.", task_completed: false},
        {projects_id: 1, task_description: "Start taking notes for node authentication and testing", notes: "Hoping to stay ahead with my studies so I can brace myself for big blockers.", task_completed: false},
        {projects_id: 2, task_description: "Make portfolio responsive", notes: "The desktop version is mostly done now I need to get it mobile ready!", task_completed: false}
      ]);
    });
};
