const mobileMenu = document.querySelector('.mobile-navigation');

if (mobileMenu) {
  const label = mobileMenu.querySelector('.menu-label');
  const icon = mobileMenu.querySelector('.menu-icon');
  const updateToggle = () => {
    label.textContent = mobileMenu.open ? 'Close' : 'Menu';
    icon.textContent = mobileMenu.open ? '×' : '☰';
  };

  mobileMenu.addEventListener('toggle', updateToggle);
  updateToggle();

  mobileMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) mobileMenu.open = false;
  });

  document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target)) mobileMenu.open = false;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.open) {
      mobileMenu.open = false;
      mobileMenu.querySelector('summary').focus();
    }
  });
}
