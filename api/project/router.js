const router = require('express').Router()
const { validateProject } = require('./middleware')
const Project = require('./model')

router.post('/', validateProject, (req, res, next) => {
    Project.createProject(req.body)
    .then(newProject => {
        !newProject.project_completed ?
            newProject.project_completed = false :
            newProject.project_completed = true;
        res.status(201).json(newProject);
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
    Project.getProjects()
    .then(projects => {
        projects.forEach(row => !row.project_completed ? 
            row.project_completed = false : 
            row.project_completed = true)
        res.status(200).json(projects);
    })
    .catch(next)
});

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack:err.stack,
    })
})

module.exports = router;