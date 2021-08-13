// build your `Project` model here
const db = require('../../data/dbConfig')

async function createResource(resource) {
    const newId = (await db('resources').insert(resource));
    const newIdArray =  (await  db('resources').where('resource_id', newId));
    return newIdArray[0];     
}

async function createProject(project) {
    const newId = (await db('projects').insert(project));
    const newIdArray =  (await  db('projects').where('project_id', newId));
    return newIdArray[0];     
}

async function createTask(task) {
    const newId = (await db('tasks').insert(task));
    const newIdArray =  (await  db('tasks').where('task_id', newId));
    return newIdArray[0];     
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

async function getProjectById(id) {
    return (await db('projects').where('project_id', id))
}

async function getTasks() {
    const tasks = await db('tasks as t')
                            .join('projects as p', 
                                't.project_id', 
                                'p.project_id')
                            .select(
                                't.task_id',
                                't.task_description',
                                't.task_notes',
                                't.task_completed',
                                'p.project_name',
                                'p.project_description'
                            )

    return tasks
}

module.exports = { 
    getProjects,
    getResources,
    getResourceByName,
    createResource,
    createProject,
    getProjectById,
    createTask,
    getTasks,
};