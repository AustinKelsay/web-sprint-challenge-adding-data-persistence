
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "Computer", resource_description: "Tool for leveraging human action digitally"},
        {resource_name: "ReactJS", resource_description: "Front-end framework, much needed for my web projects, portfolio, and build week"},
        {resource_name: "VScode", resource_description: "the integrated development environment I use for all of my projects and course work!"},
        {resource_name: "Coffee", resource_description: "Is it a drug, a religion, or a virus?"}
      ]);
    });
};
