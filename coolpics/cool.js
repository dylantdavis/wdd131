console.log('cool.js loaded');
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  btn.classList.toggle('active', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
});

btn.addEventListener('escape', () => {
  nav.classList.remove('open');
  btn.classList.remove('active');
  btn.setAttribute('aria-expanded', 'false');
});