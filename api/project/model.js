// build your `Project` model here
const db = require('../../data/dbConfig')

async function createResource(resource) {
    const newId = (await db('resources').insert(resource));
    return (await  db('resources').where('resource_id', newId[0]));       
}

async function getResources() {
    return (await db('resources'))
}

async function getResourceByName(name) {
    const dupeName = await db('resources').where('resource_name', name)
    return dupeName
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
    getResourceByName,
    createResource,
};