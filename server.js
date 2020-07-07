const express = require('express');

const projectRouter = require("./api/projects-router");
const resourcesRouter = require("./api/resources-router");
const tasksRouter = require("./api/tasks-router");

const server = express();

server.use(express.json());

server.use('/projects', projectRouter);
server.use('/resources', resourcesRouter);
server.use('/tasks', tasksRouter);


module.exports = server;