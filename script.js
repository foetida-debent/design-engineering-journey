console.log("JS працює");

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
  console.log('кнопку натиснули');
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  
  if (document.body.classList.contains('light')) {
    themeToggle.textContent = '🌙';
  } else {
    themeToggle.textContent = '☀️';
  }
});