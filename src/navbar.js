export default function displayNavbar() {

    const header = document.createElement('header');
    const logo = document.createElement('a');
    const navigation = document.createElement('nav');
    const navList = document.createElement('ul');
    const body = document.querySelector('body');


    
    

    const list = ['About', 'Our Menu', 'Contact'];
    navigation.appendChild(navList);
    for(let i = 0; i < list.length; i++) {
        const partList = document.createElement('li');
        const listBtn = document.createElement('button');
        listBtn.textContent = list[i];
        partList.appendChild(listBtn);
        navList.appendChild(partList);
        

    }

    logo.textContent = 'BURDEL NA MORENCE';
    header.appendChild(logo);
    header.appendChild(navigation);
    
    body.appendChild(header);
    
    console.log('jebac biede');


} 