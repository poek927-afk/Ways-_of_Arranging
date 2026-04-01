const settings = {
  "Graphics":  "Adjust resolution, quality, and display options.",
  "Sound":     "Control music volume, sound effects, and audio output.",
  "Controls":  "Rebind keys, adjust sensitivity, and configure input.",
  "Gameplay":  "Difficulty, hints, auto-save, and gameplay options.",
  "Video":     "Brightness, contrast, and cutscene settings.",
  "Language":  "Change the game language and subtitle options."
};
 const menuButtons = document.querySelectorAll('button.menu-btn');

 menuButtons.forEach(btn => {
  btn.addEventListener('click', () => {
 
    menuButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const name = btn.textContent.trim();
    console.log(`Opened: ${name} — ${settings[name]}`);
 
  });
});