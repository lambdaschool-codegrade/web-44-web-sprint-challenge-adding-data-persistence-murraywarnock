exports.seed = function(knex, Promise) {
    return knex('projects').insert([
      { //1
        project_name: 'Benefit Party', 
        project_description: "Plan a big party to raise money.",
        project_completed: 1
      },
      { //2
        project_name: 'Board Meeting', 
        project_description: "Get board together to make decisions.",
        project_completed: 0
      },
      { //3
        project_name: 'Brand New Project', 
        project_description: "This project has just been proposed. Tasks and resources TBD.",
        project_completed: 0
      },
    ]);
  };