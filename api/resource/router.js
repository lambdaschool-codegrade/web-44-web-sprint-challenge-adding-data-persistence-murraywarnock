const router = require('express').Router()
const { validateResource } = require('./middleware')
const Resource = require('./model')

router.post('/', validateResource, (req, res, next) => {
    Resource.createResource(req.body)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(next)
})

router.get('/',(req, res, next) => {
    Resource.getResources()
    .then(resources => {
        res.status(200).json(resources);
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