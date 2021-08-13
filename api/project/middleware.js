const db = require("../../data/dbConfig");

const validateResource = (req, res, next) => {
    const { resource_name } = req.body;
    if (!resource_name) {
        const error = { status: 400, message: "resource name is required" }
        next(error);
    } else if (db('resources', 'resource_name', resource_name) !== []) { 
        const error = { status: 400, message: "resource name already in use" }
        next(error);
    } else {
        next();
    }
  };

module.exports = {

    validateResource,
}