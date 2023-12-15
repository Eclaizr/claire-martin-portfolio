document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menuOptions = document.querySelector('.menu-options');
  
    menuButton.addEventListener('click', function () {
      menuOptions.style.display = (menuOptions.style.display === 'none' || menuOptions.style.display === '') ? 'block' : 'none';
    });
  });