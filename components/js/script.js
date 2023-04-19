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