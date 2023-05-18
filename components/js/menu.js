const btnHamburguer = document.querySelector('.mobile-menu');
const activeClass = 'active';

const navbar = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const header = document.querySelector('header');

btnHamburguer.addEventListener('click', function () {
  if (this.classList.contains(activeClass)) {
    this.classList.remove(activeClass);
    
    navbar.classList.remove(activeClass);
    header.classList.remove(activeClass);
  } else {
    this.classList.add(activeClass);

    navbar.classList.add(activeClass);
    header.classList.add(activeClass);
  }

  for (let i in menuItems) {
    menuItems[i].addEventListener('click', function () {
      btnHamburguer.classList.remove(activeClass);
    
      navbar.classList.remove(activeClass);
      header.classList.remove(activeClass);
    });
  }
});

let lastScroll = 0;

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 0) {
    
    header.classList.add('hidden');
    header.classList.remove('shown');
  } else if (currentScroll < lastScroll) {

    header.classList.remove('hidden');
    header.classList.add('shown');
  }
  if (currentScroll === 0) {

    header.classList.remove('hidden');
    header.classList.remove('shown');
  }
  lastScroll = currentScroll;
});