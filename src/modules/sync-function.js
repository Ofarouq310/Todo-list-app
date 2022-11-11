import { tasks } from './task-obj.js';

// Declare needed variables
const addItem = document.getElementById('add_task');
const list = document.querySelector('.todo_list');
const syncIcn = document.querySelector('.fa-rotate');
const bgImage = document.querySelector('.title_icn_container');
const img = [];
img[0] = './images/background-0.jpg';
img[1] = './images/background-1.jpg';
img[2] = './images/background-2.jpg';
img[3] = './images/background-3.jpg';
img[4] = './images/background-4.jpg';
img[5] = './images/background-5.png';
img[6] = './images/background-6.png';

// Creating function for the sync icon
const syncFunctionality = () => {
  syncIcn.addEventListener('click', () => {
    syncIcn.style.animation = 'fa-spin 0.3s';
    setTimeout(() => {
      list.innerHTML = '';
      addItem.value = '';
      tasks.length = 0;
      localStorage.clear();
      syncIcn.style.animation = 'none';
    },
    300);

    const random = Math.floor(Math.random() * img.length);
    bgImage.style.backgroundImage = `url(${img[random]})`;
    const dateBkg = document.querySelector('#date_container');
    const clearBtn = document.querySelector('#clear_btn');

    // Switch statement for the coloring of date and clear button based on the background image
    switch (random) {
      default:
      case 0:
      case 2:
        dateBkg.style.backgroundColor = 'rgb(74, 154, 183)';
        clearBtn.style.backgroundColor = 'rgb(74, 154, 183)';
        break;
      case 1:
        dateBkg.style.backgroundColor = 'rgb(196, 112, 174)';
        clearBtn.style.backgroundColor = 'rgb(196, 112, 174)';
        break;
      case 3:
        dateBkg.style.backgroundColor = 'rgb(167, 91, 78)';
        clearBtn.style.backgroundColor = 'rgb(167, 91, 78)';
        break;
      case 4:
      case 5:
        dateBkg.style.backgroundColor = 'rgb(217, 186, 128)';
        clearBtn.style.backgroundColor = 'rgb(217, 186, 128)';
        break;
      case 6:
        dateBkg.style.backgroundColor = 'rgb(137, 208, 156)';
        clearBtn.style.backgroundColor = 'rgb(137, 208, 156)';
        break;
    }
  });
};
export default syncFunctionality;