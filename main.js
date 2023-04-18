const navMenu = document.querySelector('.menu');
const menuIcon = document.querySelector('.ambony');
const menuLinks = document.querySelectorAll('.menu-item');

menuIcon.addEventListener('click', () => {
  const visibilityMenu = navMenu.getAttribute('item-visibility');
  const visibilityIcon = menuIcon.getAttribute('cancle-visibility');

  if (visibilityMenu === 'false' && visibilityIcon === 'false') {
    navMenu.setAttribute('item-visibility', 'true');
    menuIcon.setAttribute('cancle-visibility', 'true');
  } else {
    navMenu.setAttribute('item-visibility', 'false');
    menuIcon.setAttribute('cancle-visibility', 'false');
  }
});

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    navMenu.setAttribute('item-visibility', 'false');
    menuIcon.setAttribute('cancle-visibility', 'false');
  });
}