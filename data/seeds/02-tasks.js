exports.seed = function(knex, Promise) {
    return knex('tasks').insert([{
        task_description: "Party Kickoff Mtg",
        task_notes: "Kickoff ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis odio. Nulla mattis turpis augue, at elementum nisl cursus vel. Maecenas condimentum nibh in.",
        task_completed: 1,
        project_id: 1,
    }, 
    {
        task_description: "Rent Hall",
        task_notes: "Hall ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis odio. Nulla mattis turpis augue, at elementum nisl cursus vel. Maecenas condimentum nibh in.",
        task_completed: 1,
        project_id: 1,
    },{
        task_description: "Invite Guests",
        task_notes: "Invitations ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis odio. Nulla mattis turpis augue, at elementum nisl cursus vel. Maecenas condimentum nibh in.",
        task_completed: 1,
        project_id: 1,
    },{
        task_description: "Schedule Conference Room",
        task_notes: "Room ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis odio. Nulla mattis turpis augue, at elementum nisl cursus vel. Maecenas condimentum nibh in.",
        task_completed: 0,
        project_id: 2,
    },{
        task_description: "Notify Stockholders",
        task_notes: "Stockholders ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis odio. Nulla mattis turpis augue, at elementum nisl cursus vel. Maecenas condimentum nibh in.",
        task_completed: 0,
        project_id: 2,
    },{
        task_description: "Get Caterers",
        task_notes: "Caterers ipsum dolor sit amet, consectetur adipiscing elit. Aenean et felis odio. Nulla mattis turpis augue, at elementum nisl cursus vel. Maecenas condimentum nibh in.",
        task_completed: 0,
        project_id: 2,
    },
    ]);
  };