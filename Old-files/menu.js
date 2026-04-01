document.querySelectorAll('button.menu-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const label = btn.textContent.trim();
    console.log(`Navigating to: ${label}`);
     });
});
 