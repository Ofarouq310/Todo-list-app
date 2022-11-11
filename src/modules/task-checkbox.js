import { tasks } from './task-obj.js';

// Declare the checkbox functionality upon change
const checkbox = () => {
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  const listItem = document.querySelectorAll('.list_item');

  for (let i = 0; i < checkbox.length; i += 1) {
    checkbox[i].addEventListener('change', () => {
      if (checkbox[i].checked) {
        tasks[i].completed = true;
        checkbox[i].checked = true;
        listItem[i].classList.add('completed');
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
        tasks[i].completed = false;
        checkbox[i].checked = false;
        listItem[i].classList.remove('completed');
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });
  }
};

// Declare function to save checked tasks
const checkAll = () => {
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < checkbox.length; i += 1) {
    if (tasks[i].completed === true) {
      checkbox[i].checked = true;
    }
  }
};

export default checkbox;
export { checkAll };
