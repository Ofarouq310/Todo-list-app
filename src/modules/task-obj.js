// Declare array of objects
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export default tasks;