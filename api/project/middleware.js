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

module.exports = {
    validateProject,
    validateResource,
}