const territories = [
  "Dusty Creek Desert",
  "Rattlesnake Ridge",
  "Dead Man's Gulch",
  "Silver Sands",
  "Coyote Canyon"
];

let currentIndex = 0;

const regionName = document.querySelector('div.region-name');
const mapButtons = document.querySelectorAll('button.map-btn');
const btnPrev    = document.getElementById('btn-prev');
const btnNext    = document.getElementById('btn-next');

mapButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    mapButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

btnPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + territories.length) % territories.length;
  regionName.textContent = territories[currentIndex];
});

btnNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % territories.length;
  regionName.textContent = territories[currentIndex];
});