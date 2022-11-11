// Function to display the three dots menu.
const displayDots = () => {
  const listItem = document.querySelectorAll('.list_item');
  const dotsIcon = document.querySelectorAll('.dots_icon');
  const mobileView = window.matchMedia('(max-width: 768px)');

  if (mobileView.matches) {
    dotsIcon.forEach((icon) => {
      icon.style.display = 'block';
    });
  } else {
    for (let i = 0; i < listItem.length; i += 1) {
      listItem[i].addEventListener('pointerover', () => {
        dotsIcon[i].style.display = 'block';
      });

      listItem[i].addEventListener('pointerout', () => {
        dotsIcon[i].style.display = 'none';
      });
    }
  }
};

// Implement the functionality of the three dots menu.
const threeDots = () => {
  const dotsIcon = document.querySelectorAll('.dots_icon');
  const dotDiv = document.querySelectorAll('.dot_div');

  for (let i = 0; i < dotsIcon.length; i += 1) {
    dotDiv[i].style.display = 'none';
    dotsIcon[i].addEventListener('click', () => {
      if (dotDiv[i].style.display === 'none') {
        dotDiv[i].style.display = 'block';
        dotDiv.forEach((div) => {
          if (div !== dotDiv[i]) {
            div.style.display = 'none';
          }
        });
      } else {
        dotDiv[i].style.display = 'none';
      }
    });
  }
};

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dots_icon')) {
    const dotDiv = document.getElementsByClassName('dot_div');
    for (let i = 0; i < dotDiv.length; i += 1) {
      dotDiv[i].style.display = 'none';
    }
  }
});

export { displayDots, threeDots };