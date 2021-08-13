const db = require('../../data/dbConfig')

async function createTask(task) {
    const newId = (await db('tasks').insert(task));
    const newIdArray =  (await  db('tasks').where('task_id', newId));
    return newIdArray[0];     
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
    createTask,
    getTasks,
};