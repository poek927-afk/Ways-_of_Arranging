const quests = {
  "A Hurt Farmer":      "A farmer has been attacked by bandits and has offered a bounty to catch them. Head to Barrows farm to begin the quest.",
  "Prisoner Escape":    "A prisoner has escaped from the city jail and was last seen heading into the forest. Track them down before they cross the border.",
  "Monster Attack":     "Villagers report a creature lurking near the mill at night. Investigate the area and put an end to the attacks.",
  "Defend the Village": "Raiders plan to strike at dawn. Speak with the village elder and help organise a defence before it's too late.",
  "Sword Training":     "The old blacksmith offers to teach you advanced combat techniques. Meet him at the training grounds east of town.",
  "The Missing Horse":  "A merchant's prized horse has gone missing near Hollow Creek. Find the horse and return it safely for a reward."
};

const buttons     = document.querySelectorAll('button.quest-btn');
const detailTitle = document.querySelector('div.detail-title');
const detailBody  = document.querySelector('div.detail-body');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

     buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
 
    const name = btn.textContent.trim();
    detailTitle.textContent = name;
    detailBody.textContent  = quests[name];
 
  });
});
 