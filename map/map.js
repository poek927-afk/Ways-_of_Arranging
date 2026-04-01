const territories = [
  {
    name: "Dusty Creek Territory",
    bg:   "western.jpg"
  },
  {
    name: "Rattlesnake Ridge",
    bg:   "rattle-snake-ridge.jpg"
  },
  {
    name: "Dead Man's Gulch",
    bg:   "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1400&q=80"
  },
  {
    name: "Silver Sands",
    bg:   "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Coyote Canyon",
    bg:   "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1400&q=80"
  }
];

let currentIndex = 0;

const regionName = document.querySelector('div.region-name');
const bgImg      = document.querySelector('div.bg img');
const mapButtons = document.querySelectorAll('button.map-btn');
const btnPrev    = document.getElementById('btn-prev');
const btnNext    = document.getElementById('btn-next');

function goToTerritory(index) {
  const territory = territories[index];

   bgImg.style.opacity = 0;
  setTimeout(() => {
    bgImg.src          = territory.bg;
    bgImg.style.opacity = 1;
  }, 300);
 
  regionName.textContent = territory.name;
}

mapButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    mapButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

btnPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + territories.length) % territories.length;
  goToTerritory(currentIndex);
});
 
btnNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % territories.length;
  goToTerritory(currentIndex);
});