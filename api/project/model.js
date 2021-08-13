// build your `Project` model here
const db = require('../../data/dbConfig')

function get() {
    Promise.resolve({ message: `get` });
}
function getById(id) {
    Promise.resolve(`getById: ${id}`);
}

module.exports = { 
    getById,
    get 
};