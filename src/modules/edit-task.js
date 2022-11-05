// Function to edit task's description
const editTask = () => {
  const editbtn = document.getElementsByClassName('edit_btn');
  const label = document.getElementsByTagName('label');

  for (let i = 0; i < editbtn.length; i += 1) {
    editbtn[i].addEventListener('click', () => {
      label[i].contentEditable = true;
      label[i].focus();
      label[i].addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
          label[i].contentEditable = false;
        }
      });
    });
  }

  for (let i = 0; i < label.length; i += 1) {
    label[i].addEventListener('click', () => {
      label[i].contentEditable = true;
      label[i].focus();
      label[i].addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
          label[i].contentEditable = false;
        }
      });
    });
  }
};
export default editTask;