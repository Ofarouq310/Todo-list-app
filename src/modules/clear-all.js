import tasks from './task-obj.js';
import refresh from './refresh-list.js';

const clearAll = document.getElementById('clear_btn');

// Declare function to clear all completed tasks
const clearAllCompleted = () => {
  clearAll.addEventListener('click', () => {
    const modTasks = tasks.filter((task) => task.completed === false);
    tasks.splice(0, tasks.length, ...modTasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    refresh();
  });
};

export default clearAllCompleted;