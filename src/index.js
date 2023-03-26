import displayNavbar from './navbar.js';
import displayAbout from './about.js';
import displayMenu from './menu.js';
import displayContact from './contact.js';



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
            const contentContact = document.querySelector('.contact-content');
            if(state.about === true) {
                body.removeChild(aboutContent);
            } else if(state.contact === true) {
                body.removeChild(contentContact);
            }
            displayMenu();
            
            state.about = false;
            state.menu = true;
            state.contact = false;
        }
        
    });

    about.addEventListener('click', function() {
        
        if(state.about === false) {
            const body = document.querySelector('body');
            const aboutContent = document.querySelector('.content');
            const menuContent = document.querySelector('.content-menu');
            const contactContent = document.querySelector('.contact-content');
            if(state.menu === true) { 
                body.removeChild(menuContent);
            } else if(state.contact === true) {
                body.removeChild(contactContent);
            }
            
            
            displayAbout();
            state.about = true;
            state.menu = false;
            state.contact = false;
        }
        
    })

    contact.addEventListener('click', function() {
        if(state.contact === false) {
            const aboutContent = document.querySelector('.content');
            const menuContent = document.querySelector('.content-menu');
            const contactContent = document.querySelector('.contact-content');
            if(state.about === true) {
                body.removeChild(aboutContent);
            } else if(state.menu === true) {
                body.removeChild(menuContent);
            }
            displayContact();
            state.about = false;
            state.menu = false;
            state.contact = true;
        }
    })



   


})();

