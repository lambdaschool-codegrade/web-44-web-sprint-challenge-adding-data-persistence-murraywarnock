// build your server here and require it from index.js
const express = require("express");
const projectRouter = require("./project/router");

const server = express();

server.use(express.json());

// server.get('/', (req, res, next) => {
//   res.send(`
//     <h1>Data Modeling - Module 4</h1>
//     <h2>Web44, Unit 4, Sprint 2</h2>
//     <p>Murray Warnock</p>
//     <p>August 12, 2021</p>
//   `);
//   next();
// });

// server.use('*', (req, res, next) => {
//     next({ status: 404, message: 'not found' }); 
// });

// server.use((err, req, res, next) => { 
//   res.status(err.status || 500).json({ message: `ERROR: ${err.message}` });
//   next(); // There should be no next....
// });  

server.use("/api", projectRouter)

server.use('*', (req, res, next) => { //eslint-disable-line
  res.json({ api: 'up' });
})

module.exports = server;