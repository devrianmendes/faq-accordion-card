const p = document.querySelectorAll('.o-faq p');
const pattern = document.querySelector('#pattern-mobile');
const events = ['resize', 'load'];

function openAccordion() {
  this.classList.toggle('clicked');
  this.nextElementSibling.classList.toggle('clicked');
  this.nextElementSibling.nextElementSibling.classList.toggle('clicked');
}

function handlePattern() {
  const winWidth = window.innerWidth;
  if (winWidth >= 992) {
    pattern.src = './img/bg-pattern-desktop.svg';
  } else {
    pattern.src = './img/bg-pattern-mobile.svg';
  }
}

p.forEach((eachFaq) => {
  eachFaq.addEventListener('click', openAccordion);
});

events.forEach((evento) => {
  window.addEventListener(evento, handlePattern);
});
