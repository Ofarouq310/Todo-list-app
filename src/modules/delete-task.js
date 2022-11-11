/* eslint-disable no-constant-condition */
import { tasks } from './task-obj.js';
import refresh from './refresh-list.js';

// Declare function to delete tasks from the list
const deleteTask = () => {
  const trashBtn = document.querySelectorAll('.trash_btn');
  const listItem = document.querySelectorAll('.list_item');
  const list = document.querySelector('.todo_list');

  for (let i = 0; i < trashBtn.length; i += 1) {
    trashBtn[i].addEventListener('click', () => {
      if (parseInt(trashBtn[i].id, 10) === tasks[i].index) {
        tasks.splice(i, 1);
        listItem[i].remove();
        list.innerHTML = '' ? localStorage.clear() : localStorage.setItem('tasks', JSON.stringify(tasks));
        refresh();
      }
    });
  }
};

export default deleteTask;
