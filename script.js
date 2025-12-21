const phrases = [
  "Student",
  "Developer",
  "Athlete",
  "Fractal Enjoyer",
  "#1 Benjamin Tine Menace",
  "Bodybuilder",
  "Philosopher",
  "Powerlifter",
  "6'1 btw",
  "Maniac",
];

let index = 0;
let charIndex = 0;
const speed = 80;
const delay = 1200;

const el = document.getElementById("typed-text");

function type() {
  if (charIndex < phrases[index].length) {
    el.textContent += phrases[index][charIndex];
    charIndex++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, delay);
  }
}

function erase() {
  if (charIndex > 0) {
    el.textContent = phrases[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, speed / 2);
  } else {
    index = (index + 1) % phrases.length;
    setTimeout(type, speed);
  }
}

type();

document.querySelectorAll('.card').forEach(card => {
  const screenshots = card.querySelectorAll('.screenshot');
  const buttons = card.querySelectorAll('.screenshot-buttons button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const index = parseInt(button.dataset.index);

      screenshots.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    });
  });
});