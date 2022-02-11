let header = document.querySelector('.header');
let ham = document.querySelector('.header__hamburger');
let close = document.querySelector('.nav__box');
ham.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    header.style = `
       display:block;
       inset:0;
    `;
  }
});

close.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__box')) {
    header.style = `
      display: none;
    `;
  }
});
