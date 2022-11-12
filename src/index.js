import './style.css';
import addTask from './modules/add-task.js';
import refresh from './modules/refresh-list.js';
import clearAllCompleted from './modules/clear-all.js';
import syncFunctionality from './modules/sync-function.js';
import displayDate from './modules/date.js';

// Display the current date
displayDate();

// Declare function to add tasks to the task-object
addTask();

// Declare function to empty and refresh the list
syncFunctionality();

// Declare function remove all completed tasks
clearAllCompleted();

// Populate the list of tasks on page load
window.addEventListener('load', () => {
  const bgImage = document.querySelector('.title_icn_container');
  bgImage.style.backgroundImage = 'url(./images/background-5.png)';
  refresh();
});