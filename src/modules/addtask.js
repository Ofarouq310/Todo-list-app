import tasks from './taskobj.js';
// Declare needed variables
const list = document.querySelector('.todo_list');

// Declare function to add tasks to the list
const addTask = () => {
  tasks.forEach((task) => {
    const t = ` <li class="list_item common_styles">
        <div class="task_container">
            <input type="checkbox" id="${task.id}">
            <label for="${task.id}">${task.description}</label>
        </div>   
            <img src="./images/dots.png" alt="dots" class="dots_icon"></img>
    </li>`;
    list.innerHTML += t;
    // list.insertAdjacentHTML('beforeend', t);
  });
};

export default addTask;