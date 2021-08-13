const Project = require('../project/model')

  const validateTask = async (req, res, next) => {
    const { task_description, project_id } = req.body;
    if (!task_description) {
        const error = {
            status: 400, 
            message: "task description is required"
        }
        next(error);
    } else if (!project_id) {
        const error = {
            status: 400, 
            message: "project id is required"
        }
        next(error);   
    } else {
        const project = await Project.getProjectById(project_id);
        if (project.length === 0) { 
            const error = {
                status: 400, 
                message: "project id must belong to an existing project"
            }
            next(error);
        } else {
            next();
        }
    }
  };

module.exports = {
    validateTask,
}