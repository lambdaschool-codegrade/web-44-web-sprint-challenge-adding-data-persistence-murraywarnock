const validateProject = async (req, res, next) => {
    const { project_name } = req.body;
    if (!project_name) {
        const error = { 
            status: 400, 
            message: "project name is required" 
        }
        next(error);
    } else {
        next();   
    }    
};

module.exports = {
    validateProject
}