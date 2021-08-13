// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/projects',(req, res, next) => {
    Project.getProjects()
    .then(result => {
        result.forEach(row => !row.project_completed ? row.project_completed = false : row.project_completed = true)
        res.status(200).json(result);
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the projects router',
        message: err.message,
        stack:err.stack,
    })
})

module.exports = router;