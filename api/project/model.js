// build your `Project` model here
const db = require('../../data/dbConfig')

async function createResource(resource) {
    return (await db('resources').insert(resource))            
}

async function getResources() {
    return (await db('resources'))
}

async function getProjects() {
    return (await db('projects'))
}
// function getById(id) {
//     Promise.resolve(`getById: ${id}`);
// }

module.exports = { 
    getProjects,
    getResources,
    createResource,
};