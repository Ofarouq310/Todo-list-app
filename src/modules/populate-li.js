import editTask from './edit-task.js';
import checkbox, { checkAll } from './task-checkbox.js';
import dragAndDrop, { displayDragIcon } from './drag-drop.js';
import deleteTask from './delete-task.js';
import { displayDots, threeDots } from './three-dots.js';

// Declare function to add & delete tasks in the list
const populateListItem = (task) => {
  const list = document.querySelector('.todo_list');

  const temp = ` <li class="list_item common_styles" draggable="true">      
  <div class="task_container">
            <input type="checkbox">
            <label>${task.description}</label>
        </div>   
        <div class="icons_container">
           <div class="dot_div">
           <ul class="dot_ul">
               <li class="dot_li">
                     <button class="dot_btn edit_btn" id="">
                     <i class="fa-solid fa-file-pen edit_icon"></i>
                     <span>Edit ask</span>
                     </button>
               </li>
               <hr>
               <li class="dot_li">
                     <button class="dot_btn trash_btn" id=${task.index}>
                     <i class="fa-solid fa-trash-can trash_icon"></i>
                     <span>Delete task</span>
                     </button>
               </li>
           </ul>
         </div>
         <i class="fa-solid fa-up-down-left-right drag_icon"></i>
         <i class="fa-solid fa-ellipsis-vertical dots_icon"></i>
        </div>

    </li>`;

  list.innerHTML += temp;

  // Call the needed buttons & functionalities inside the list item

  // Display the three dots icon
  displayDots();
  // Add the functionality of the three dots icon
  threeDots();

  // Edit task
  editTask();

  // Delete task
  deleteTask();

  // Display drag icon
  displayDragIcon();
  // Add drag and drop functionality
  dragAndDrop();

  // Checkbox
  checkbox();
  // Save checked tasks
  checkAll();
};

export default populateListItem;