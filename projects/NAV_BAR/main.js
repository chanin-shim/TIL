const togglebtn = document.querySelector('.navbar_toglebtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

togglebtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    // # active가 없다면 active를 추가해주고, 있다면 빼준다
})
