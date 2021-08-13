const db = require('../../data/dbConfig')

async function createResource(resource) {
    const newId = (await db('resources').insert(resource));
    const newIdArray =  (await  db('resources').where('resource_id', newId));
    return newIdArray[0];     
}

async function getResources() {
    return (await db('resources'))
}

async function getResourceByName(name) {
    const dupeName = await db('resources').where('resource_name', name)
    return dupeName
}

module.exports = { 
    getResources,
    getResourceByName,
    createResource,
};