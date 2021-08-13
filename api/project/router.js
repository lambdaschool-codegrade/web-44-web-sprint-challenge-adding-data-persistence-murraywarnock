// build your `/api/projects` router here
const router = require('express').Router()
const { validateResource, validateProject, validateTask } = require('./middleware')
const Project = require('./model')

router.post('/resources', validateResource, (req, res, next) => {
    Project.createResource(req.body)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(next)
})

router.get('/resources',(req, res, next) => {
    Project.getResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(next)
})

router.post('/projects', validateProject, (req, res, next) => {
    Project.createProject(req.body)
    .then(newProject => {
        !newProject.project_completed ?
            newProject.project_completed = false :
            newProject.project_completed = true;
        res.status(201).json(newProject);
    })
    .catch(next)
})

router.get('/projects', (req, res, next) => {
    Project.getProjects()
    .then(projects => {
        projects.forEach(row => !row.project_completed ? 
            row.project_completed = false : 
            row.project_completed = true)
        res.status(200).json(projects);
    })
    .catch(next)
});

router.post('/tasks', validateTask, (req, res, next) => {
    Project.createTask(req.body)
    .then(newTask => {
        !newTask.task_completed ?
            newTask.task_completed = false :
            newTask.task_completed = true;
        res.status(201).json(newTask);
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack:err.stack,
    })
})

module.exports = router;