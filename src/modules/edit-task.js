import tasks from './task-obj.js';

// Function to edit task's description
const editTask = () => {
  const editbtn = document.getElementsByClassName('edit_btn');
  const label = document.getElementsByTagName('label');

  for (let i = 0; i < editbtn.length; i += 1) {
    editbtn[i].addEventListener('click', () => {
      label[i].contentEditable = true;
      label[i].focus();
      label[i].addEventListener('keypress', () => {
        if (window.event.keyCode === 13) {
          tasks[i].description = label[i].innerText;
          localStorage.setItem('tasks', JSON.stringify(tasks));
          label[i].contentEditable = false;
        }
      });
    });
  }

  for (let i = 0; i < label.length; i += 1) {
    label[i].addEventListener('click', () => {
      label[i].contentEditable = true;
      label[i].focus();
      label[i].addEventListener('keypress', () => {
        if (window.event.keyCode === 13) {
          tasks[i].description = label[i].innerText;
          localStorage.setItem('tasks', JSON.stringify(tasks));
          label[i].contentEditable = false;
        }
      });
      window.addEventListener('click', (e) => {
        if (label[i].contains(e.target)) {
          label[i].contentEditable = true;
          label[i].focus();
        } else {
          tasks[i].description = label[i].innerText;
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      });
    });
  }
};
export default editTask;