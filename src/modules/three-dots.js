// Implement the functionality of the three dots menu.
const threeDots = () => {
  const dotsIcon = document.querySelectorAll('.dots_icon');
  const dotDiv = document.querySelectorAll('.dot_div');

  for (let i = 0; i < dotsIcon.length; i += 1) {
    dotDiv[i].style.display = 'none';
    dotsIcon[i].addEventListener('click', () => {
      if (dotDiv[i].style.display === 'none') {
        dotDiv[i].style.display = 'block';
      } else {
        dotDiv[i].style.display = 'none';
      }
    });
  }
};
export default threeDots;