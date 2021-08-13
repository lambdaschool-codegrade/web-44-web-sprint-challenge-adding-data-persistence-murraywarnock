// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    return (await db('projects'))
}

async function getResources() {
    return (await db('resources'))
}
// function getById(id) {
//     Promise.resolve(`getById: ${id}`);
// }

module.exports = { 
    getProjects,
    getResources,
};