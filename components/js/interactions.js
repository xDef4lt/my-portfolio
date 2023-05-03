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

const audio = document.querySelector('audio');
const toggleMusicBtn = document.querySelector('.music-btn');

toggleMusicBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

const cardIcons = document.querySelectorAll('.icon-container');
const icons = document.querySelectorAll('.lang-icon');

const defaultIcons = [
  './assets/svgs/html.svg',
  './assets/svgs/css.svg',
  './assets/svgs/js.svg',
  './assets/svgs/ts.svg',
  './assets/svgs/boots.svg',
  './assets/svgs/node.svg',
  './assets/svgs/python.svg',
  './assets/svgs/figma.svg'
];

const activeIcons = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'

];

for (let i in cardIcons) {
  cardIcons[i].addEventListener('mouseenter', () => {
    icons[i].src = activeIcons[i]
  });

  cardIcons[i].addEventListener('mouseout', () => {
    icons[i].src = defaultIcons[i];
  })
}