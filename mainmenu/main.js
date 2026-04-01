const destinations = {
  "Equip":    "equip.html",
  "Map":      "map.html",
  "Quests":   "index.html",
  "Settings": "settings.html"
};

const menuButtons = document.querySelectorAll('button.menu-btn');

menuButtons.forEach(btn => {
  btn.addEventListener('click', () => {