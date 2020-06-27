
exports.up = function(knex) {
    return knex.schema.createTable("projects", table => {
        table.increments("id");

        table
            .text("project_name")
            .notNullable()
            .unique();

        table
            .text("project_description")
            .unique();

        table
            .boolean("project_completed")
            .notNullable();
        
        table
            .integer("resources_id")
            .unsigned()
            .references("id")
            .inTable("resources")
            .onUpdate("CASCADE");
    })
    .createTable("resources", table => {
        table.increments("id");

        table
            .text("resource_name")
            .notNullable()
            .unique();

        table
            .text("resource_description");
    })
    .createTable("tasks", table => {
        table.increments("id");

        table
            .text("task_description")
            .notNullable();

        table
            .text("notes");

        table
            .boolean("task_completed")
            .notNullable();
        
        table
            .integer("projects_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE");
    })
    .createTable("projects_resources", table => {
        table
          .integer("projects_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE");
        table
          .integer("resources_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onUpdate("CASCADE");
        table.primary(["projects_id", "resources_id"]);
      });


  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_resources");
    await knex.schema.dropTableIfExists("tasks");
    await knex.schema.dropTableIfExists("resources");
    await knex.schema.dropTableIfExists("projects");
};
