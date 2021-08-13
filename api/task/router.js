const router = require('express').Router()
const { validateTask } = require('./middleware')
const Task = require('./model')

router.post('/', validateTask, (req, res, next) => {
    Task.createTask(req.body)
    .then(newTask => {
        !newTask.task_completed ?
            newTask.task_completed = false :
            newTask.task_completed = true;
        res.status(201).json(newTask);
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
    Task.getTasks()
    .then(tasks => {
        tasks.forEach(row => !row.task_completed ? 
            row.task_completed = false : 
            row.task_completed = true)
        res.status(200).json(tasks);
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