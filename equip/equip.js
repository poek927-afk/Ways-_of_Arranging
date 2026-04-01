const items = {
  "Super Mushroom": "Grow bigger and stronger. Take one hit without losing a life.",
  "Fire Flower":    "Throw fireballs at enemies. Lights up dark caves too.",
  "Super Star":     "Become invincible for a short time. Defeat enemies on contact.",
  "Cape Feather":   "Fly through the air and deflect enemies with a spin.",
  "Mega Mushroom":  "Grow to enormous size and stomp through everything in your path."
};

const itemButtons = document.querySelectorAll('button.item-btn');
const slotButtons = document.querySelectorAll('button.slot:not(.empty)');
const infoText    = document.querySelector('div.info-text');
 
let selectedSlot = null;