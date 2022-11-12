// Declare function to display the current date
const displayDate = () => {
  const date = new Date();
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const today = date.toLocaleDateString('en-US', options);
  document.getElementById('date').innerHTML = today;
};

export default displayDate;