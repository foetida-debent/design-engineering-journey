console.log ("JS парцює")
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
  console.log('кнопку натиснули');
});
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});