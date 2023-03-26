export default function displayContact() {
    const body = document.querySelector('body');

    const contactsFactory = (fullName, phoneNumber, email) => {
        return {fullName, phoneNumber, email};
    }

    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    body.appendChild(contactContent);
    const contactContainer = document.querySelector('.contact-content');

    const infoContent = document.createElement('div');
    infoContent.classList.add('info-container');
    contactContainer.appendChild(infoContent);
                       

    
    const infoContainer = document.querySelector('.info-container');

    const contacts = [];

    const firstContact = contactsFactory('Jan Kowalski', '455-645-980', 'jankowalski@onet.pl');
    contacts.push(firstContact);

    console.log(firstContact);
    const secondContact = contactsFactory('Krzysztof Nowak', '540-766-666', 'knowak@gmail.com');
    contacts.push(secondContact);
    
    const cards = [];
    contacts.forEach(contact => {
        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card');
        infoContainer.appendChild(infoCard);
    });
    
    
    const dataInfo = document.querySelectorAll('.info-card');
    const infoCards = Array.from(dataInfo);

    infoCards.forEach(infoCard => {
        const image = new Image(100,100);
        image.src = './src/images/avatar1.png';
        image.classList.add('image');
        infoCard.appendChild(image);
        const infoSection = document.createElement('div');
        infoSection.classList.add('info-section');
        infoCard.appendChild(infoSection);
    })

    const sectionsList = document.querySelectorAll('.info-section');
    const sections = Array.from(sectionsList);

    sections.forEach(section => {
        const fullName = document.createElement('h3');
        fullName.classList.add('infos');
        const phoneNumber = document.createElement('h3');
        phoneNumber.classList.add('infos');
        const email = document.createElement('h3');
        email.classList.add('infos');
        section.appendChild(fullName);
        section.appendChild(phoneNumber);
        section.appendChild(email);
        
    })

    const infosList = document.querySelectorAll('.infos');
    const infos = Array.from(infosList);

    const firstContactInfos = infos.splice(0,3);
    const secondContactInfos = infos.splice(0,3);

    console.log(firstContactInfos, secondContactInfos);


    firstContactInfos[0].textContent = firstContact['fullName'];
    firstContactInfos[1].textContent = firstContact['phoneNumber'];
    firstContactInfos[2].textContent = firstContact['email'];

    secondContactInfos[0].textContent = secondContact['fullName'];
    secondContactInfos[1].textContent = secondContact['phoneNumber'];
    secondContactInfos[2].textContent = secondContact['email'];
    
    
        


}