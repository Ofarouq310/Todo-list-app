// Declare array of objects
/* eslint-disable-next-line */
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Declare function to modify tasks object if needed
function modifyTasks(modTasks) {
  tasks = modTasks;
}

export { tasks, modifyTasks };