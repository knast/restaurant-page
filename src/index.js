import displayNavbar from './navbar.js';
import displayAbout from './about.js';
import displayMenu from './menu.js';

(() => {
    displayNavbar();
    displayAbout();

    
    const about = document.querySelector('.About');
    const menu = document.querySelector('.Menu');
    const contact = document.querySelector('.Contact');
    const menuContainer = document.querySelector('.menu-container');



    menu.addEventListener('click', function() {
        if(!menuContainer) {
            displayMenu();
        }
    });
   


})();

