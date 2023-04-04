import tasks from './task-obj.js';
import populateListItem from './populate-li.js';
import { checkAll } from './task-checkbox.js';

// Declare function to refresh changes in the list
const refresh = () => {
  const list = document.querySelector('.todo_list');
  const trashBtn = document.querySelectorAll('.trash_btn');
  list.innerHTML = '';
  tasks.forEach((task) => {
    task.index = (tasks.indexOf(task)) + 1;
    trashBtn.forEach((btn) => {
      btn.id = task.index;
    });
    populateListItem(task);
  });
  checkAll();
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
export default refresh;