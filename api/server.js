// build your server here and require it from index.js
const express = require("express");
const projectRouter = require("./project/router");

const server = express();

server.use(express.json());

server.get('/', (req, res, next) => {
  res.send(`
    <h2>Web Sprint Challenge - Module 4, Unit 2</h1>
    <h1>Web44</h2>
    <p>Murray Warnock</p>
    <p>August 13, 2021</p>
  `);
  next();
});

server.use("/api", projectRouter)

server.use('*', (req, res, next) => {
    next({ status: 404, message: 'not found' }); 
});

// server.use((err, req, res, next) => { 
//   res.status(err.status || 500).json({ message: `ERROR: ${err.message}` });
//   next(); // There should be no next....
// });  

server.use('*', (req, res, next) => { //eslint-disable-line
  res.json({ api: 'up' });
})

module.exports = server;