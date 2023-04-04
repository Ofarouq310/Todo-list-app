import tasks from './task-obj.js';
import refresh from './refresh-list.js';

// Functipn to display drag icon
const displayDragIcon = () => {
  const listItem = document.querySelectorAll('.list_item');
  const dragIcon = document.querySelectorAll('.drag_icon');

  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('pointerover', () => {
      dragIcon[i].style.display = 'block';
    });

    listItem[i].addEventListener('pointerout', () => {
      dragIcon[i].style.display = 'none';
    });
  }
};
// Function to drag and drop tasks
const dragAndDrop = () => {
  let draggedItem = null;
  const draggables = Array.from(document.querySelectorAll('.list_item'));

  const replaceItems = (e) => {
    const replacedItem = draggables.indexOf(e.target.closest('.list_item'));
    draggables[draggedItem].after(draggables[replacedItem]);
    tasks.splice(replacedItem, 0, tasks.splice(draggedItem, 1)[0]);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    refresh();
  };

  const handleDragStart = (e) => {
    draggedItem = draggables.indexOf(e.target);
    draggables[draggedItem].classList.add('drag_start');
    draggables[draggedItem].style.transform = 'scale(0.95)';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.target.classList.add('over');
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove('over');
  };

  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    replaceItems(e);
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    draggables.forEach((item) => {
      item.classList.remove('over');
    });
  };

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', handleDragStart, false);
    draggable.addEventListener('dragover', handleDragOver, false);
    draggable.addEventListener('dragenter', handleDragEnter, false);
    draggable.addEventListener('drag', handleDrag, false);
    draggable.addEventListener('dragleave', handleDragLeave, false);
    draggable.addEventListener('drop', handleDrop, false);
    draggable.addEventListener('dragend', handleDragEnd, false);
  });
};

export default dragAndDrop;
export { displayDragIcon };