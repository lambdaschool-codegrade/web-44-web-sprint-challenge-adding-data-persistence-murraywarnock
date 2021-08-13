const db = require('../../data/dbConfig')

async function createProject(project) {
    const newId = (await db('projects').insert(project));
    const newIdArray =  (await  db('projects').where('project_id', newId));
    return newIdArray[0];     
}

async function getProjects() {
    return (await db('projects'))
}

async function getProjectById(id) {
    return (await db('projects').where('project_id', id))
}

module.exports = { 
    getProjects,
    createProject,
    getProjectById,
};