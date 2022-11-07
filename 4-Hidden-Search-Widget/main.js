const searchButtonElement = document.querySelector('.btn');
const searchElement = document.querySelector('.search');
const searchInput = document.querySelector('.search input');

searchButtonElement.addEventListener('click', () => {
   searchElement.classList.add('active');
   searchInput.focus();
});

searchInput.addEventListener('blur', () => {
   searchElement.classList.remove('active');
});
