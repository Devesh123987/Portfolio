const humburger = document.getElementById('humburger');
const mainMenu = document.getElementById('main-menu');
const closeMenu = document.getElementById('item-close');

humburger.addEventListner('click', () => mainMenu.classList.tonggle('menu--show'));
humburger.addEventListner('click', () => { humburger.style.display = 'none'; });
closeMenu.addEventListner('click', () => { humburger.style.display = 'flex'; });
closeMenu.addEventListner('click', () => mainMenu.classList.tonggle('menu--show'));
mainMenu.addEventListner('click', () => mainMenu.classList.tonggle('menu--show'));
mainMenu.addEventListner('click', () => { humburger.style.display = 'flex'; });
closeMenu.addEventListner('click', () => mainMenu.classlist.toggle('main--shoe'));