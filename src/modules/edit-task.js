import tasks from "./task-obj";
import addTask from "./addDeleteTask";
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
          let list = document.querySelector('.todo_list');
          list.innerHTML = '';
          tasks.forEach((task) => {
            addTask(task);
          });  
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
    });
  }
};
export default editTask;