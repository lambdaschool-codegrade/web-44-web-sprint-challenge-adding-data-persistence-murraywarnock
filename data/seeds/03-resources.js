exports.seed = function(knex, Promise) {
    return knex('resources').insert([
        { 
            resource_name: 'Helen', 
            resource_description: "Project Manager" 
        }, //1
        { 
            resource_name: 'Frank', 
            resource_description: "Enforcer" 
        }, //2
        { 
            resource_name: 'Lisa', 
            resource_description: "Assistant" 
        }, //3

    ]);
  };