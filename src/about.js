export default function displayAbout() {

    const body = document.querySelector('body');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content');
    
    const title = document.createElement('h1');
    const motto = document.createElement('h1');
    motto.classList.add('motto');
    motto.textContent = 'SMACZNE WPIERDALAJ NIESMACZNE SPIERDALAJ';
    title.textContent = 'About';
    const description = document.createElement('article');
    contentContainer.appendChild(title);
    contentContainer.appendChild(description);
    contentContainer.appendChild(motto);
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    body.appendChild(contentContainer);
    



}

export const content = document.querySelector('.content');