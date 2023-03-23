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
    const body = document.querySelector('body');
    const aboutContent = document.querySelector('.content');
    const menuContent = document.querySelector('.content-menu');
    
    
    const state = {
        about: true,
        menu: false,
        contact: false
    }




    menu.addEventListener('click', function() {
        if(state.menu === false) {

            const menuContent = document.querySelector('.content-menu');
            const aboutContent = document.querySelector('.content')
            body.removeChild(aboutContent);
            displayMenu();
            
            state.about = false;
            state.menu = true;
            state.contact = false;
        }
        console.log(aboutContent);
    });

    about.addEventListener('click', function() {
        console.log(menuContent);
        if(state.about === false) {
            
            const aboutContent = document.querySelector('.content');
            const menuContent = document.querySelector('.content-menu');
            body.removeChild(menuContent);
            
            displayAbout();
            state.about = true;
            state.menu = false;
            state.contact = false;
        }
        
    })

    contact.addEventListener('click', function() {

    })



   


})();

