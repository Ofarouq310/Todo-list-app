import './style.css';
import addTask from './modules/addDeleteTask.js';
import tasks from './modules/task-obj.js';

// Declare function to add tasks to the task-object
const addItem = document.getElementById('add_task');
addItem.addEventListener('keypress', () => {
  if (window.event.keyCode === 13) {
    if (addItem.value === '') {
      const task = {
        index: tasks.length + 1,
        description: '"Do Task"',
        completed: false,
      };
      tasks.push(task);
      addTask(task);
    } else {
      const task = {
        index: tasks.length + 1,
        description: addItem.value,
        completed: false,
      };
      tasks.push(task);
      addTask(task);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dots_icon')) {
    const dotDiv = document.getElementsByClassName('dot_div');
    for (let i = 0; i < dotDiv.length; i += 1) {
      dotDiv[i].style.display = 'none';
    }
  }
});

window.addEventListener('load', () => {
  tasks.forEach((task) => {
    addTask(task);
  });
});