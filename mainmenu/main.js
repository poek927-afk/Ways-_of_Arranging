const menuButtons = document.querySelectorAll('button.menu-btn');
menuButtons.forEach(btn => {
  btn.addEventListener('click', () => {
     menuButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const destination = btn.dataset.href;
    window.location.href = destination;
 
  });
});
 