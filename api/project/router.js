// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/',(req, res, next) => {
    Project.get(req.params.id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(next)
})

router.get('/:id',(req, res, next) => {
    Project.getById(req.params.id)
    .then(result => {
        res.status(200).json(result)
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