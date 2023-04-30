const sections = document.querySelectorAll('[data-animar]');
const animation = 'animar';

function AnimarScroll () {
    const top = window.scrollY + (window.innerHeight * 3) / 4;

    sections.forEach (function (element) {
        if ((top) > element.offsetTop) {
            element.classList.add(animation);
        } else {
            element.classList.remove(animation);
        }
    });
}

window.addEventListener('scroll', () => AnimarScroll());

const btnTopo = document.getElementById("voltar-topo");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTopo.style.display = "flex";
  } else {
    btnTopo.style.display = "none";
  }
};


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
    })
  }

});

const cardIcons = document.querySelectorAll('.icon-container');
const icons = document.querySelectorAll('.lang-icon');

const defaultIcons = [
  './assets/svgs/html.svg',
  './assets/svgs/css.svg',
  './assets/svgs/js.svg'
];

const activeIcons = [
  './assets/svgs/html-pink.svg'
];

cardIcons.forEach(card => {
  card.addEventListener('mouseenter', () => {
    icons[card].src = activeIcons[card];
  });

  icons[card].src = defaultIcons[card];
})