// const db = require("../../data/dbConfig");
const Project = require('./model')


const validateResource = async (req, res, next) => {
    const { resource_name } = req.body;
    if (!resource_name) {
        const error = { status: 400, message: "resource name is required" }
        next(error);
    } else {
        const dupeName = await Project.getResourceByName(resource_name);
        if (dupeName.length > 0) { 
            const error = { status: 400, message: "resource name already in use" }
            next(error);
        }
    } 
    next();
  };

  const validateProject = async (req, res, next) => {
    const { project_name } = req.body;
    if (!project_name) {
        const error = { status: 400, message: "project name is required" }
        next(error);
    } else {
        next();   
    }    
  };

  const validateTask = async (req, res, next) => {
    const { task_description, project_id } = req.body;
    if (!task_description) {
        const error = { status: 400, message: "task description is required" }
        next(error);
    } else if (!project_id) {
        const error = { status: 400, message: "project id is required" }
        next(error);   
    } else {
        const project = await Project.getProjectById(project_id);
        if (project.length === 0) { 
            const error = { status: 400, message: "project id must belong to an existing project" }
            next(error);
        } else {
            next();
        }
    }
  };

module.exports = {
    validateProject,
    validateResource,
    validateTask,
}