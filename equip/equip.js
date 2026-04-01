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

slotButtons.forEach(slot => {
  slot.addEventListener('click', () => {
    slotButtons.forEach(s => s.classList.remove('active'));
    slot.classList.add('active');
    selectedSlot = slot;
    infoText.textContent = 'Slot selected! Now pick an item from the backpack.';
  });
});

 itemButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.item;

    itemButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
 