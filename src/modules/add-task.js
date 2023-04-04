import tasks from './task-obj.js';
import populateListItem from './populate-li.js';

// Declare function to add task upon input
const addTask = () => {
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
        populateListItem(task);
      } else {
        const task = {
          index: tasks.length + 1,
          description: addItem.value,
          completed: false,
        };
        tasks.push(task);
        populateListItem(task);
        addItem.value = '';
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
};

export default addTask;