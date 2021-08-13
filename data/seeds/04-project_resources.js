exports.seed = function(knex, Promise) {
    return knex('project_resources').insert([
        { 
            project_id: 1,   // Benefit Party
            resource_id: 2,  // Frank
        },
        { 
            project_id: 2,   // Board Meeting
            resource_id: 1,  // Helen
        },       
        { 
            project_id: 2,  // Board Meeting
            resource_id: 2, // Frank
        },       
        { 
            project_id: 2,  // Board Meeting
            resource_id: 3, // Lisa 
        },
    ]);
  };