const express = require("express");

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

server.use(express.json());

server.get('/', (req, res, next) => {
  res.send(`
    <h1>Web44</h2>
    <h2>Web Sprint Challenge - Module 4, Unit 2</h1>
    <p>Murray Warnock</p>
    <p>August 13, 2021</p>
  `);
  next();
});

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.use('*', (req, res, next) => {
    next({ status: 404, message: 'not found' }); 
}); 

server.use('*', (req, res, next) => { //eslint-disable-line
  res.json({ api: 'up' });
})

module.exports = server;