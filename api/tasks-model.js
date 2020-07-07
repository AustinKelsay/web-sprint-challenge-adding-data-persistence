const db = require("../data/dbConfig");

const getTasks = () => {
    return db("tasks as t")
    .select(
        "t.id",
        "t.task_description",
        "p.project_name",
        "p.project_description",
        "t.notes",
        "t.task_completed"
        )
    .join("projects as p", "p.id", "t.projects_id");
};

const addTask = data => {
    return db("tasks").insert(data, 'id');
};

module.exports = {
  getTasks,
  addTask
};