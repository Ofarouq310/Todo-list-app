import threeDots from './three-dots.js';
import editTask from './edit-task.js';
import tasks from './task-obj.js';

// Declare function to add & delete tasks in the list
const addTask = (task) => {
  const list = document.querySelector('.todo_list');

  const temp = ` <li class="list_item common_styles">
        <div class="task_container">
            <input type="checkbox" id="${task.id}">
            <label>${task.description}</label>
        </div>   
           <div class="dot_div" id="${task.id}">
           <ul class="dot_ul">
               <li class="dot_li">
                     <button class="dot_btn edit_btn" id="">
                     <img src="./images/edit.png" alt="edit" class="edit_icon"></img>
                      Edit ask
                     </button>
               </li>
                <hr>
               <li class="dot_li">
                     <button class="dot_btn trash_btn" id="${task.index}">
                     <img src="./images/trash.png" alt="trash" class="trash_icon"></img>
                     Delete task
                     </button>
               </li>
           </ul>
         </div>
         <img src="./images/dots.png" alt="dots" class="dots_icon" id="${task.id}"</img>  
    </li>`;

  list.innerHTML += temp;

  threeDots();

  editTask();

  const deleteTask = () => {
    const trashbtn = document.querySelectorAll('.trash_btn');
    const listItem = document.querySelectorAll('.list_item');

    for (let i = 0; i < trashbtn.length; i += 1) {
      trashbtn[i].addEventListener('click', () => {
        listItem[i].remove();
        tasks.filter((task) => {
          if (task.index === parseInt(trashbtn[i].id, 10)) {
            tasks.splice(tasks.indexOf(task), 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
          }
          return tasks;
        });
        const list = document.querySelector('.todo_list');
        list.innerHTML = '';
        tasks.forEach((task) => {
          addTask(task);
          task.index = (tasks.indexOf(task)) + 1;
          localStorage.setItem('tasks', JSON.stringify(tasks));
        });
      });
    }
  };

  deleteTask();
};

export default addTask;