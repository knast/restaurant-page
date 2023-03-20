
export default function displayMenu() {

    const body = document.querySelector('body');
    const content = document.querySelector('.content');

    if(content) {
       body.removeChild(content); 
    }

    const contentContainer = document.createElement('div');
    const menuContainer = document.createElement('div');
    const titleMenu = document.createElement('h1');
    menuContainer.classList.add('menu-container');
    contentContainer.appendChild(menuContainer);
    contentContainer.appendChild(titleMenu);
    


    
    const imageWidth = 100;
    const imageHeight = 100;
    const dishes = [];

    const dishOne = new Image(imageWidth, imageHeight);
    dishOne.src = '../src/images/dish1.jpg';
    dishes.push(dishOne);

    const dishTwo = new Image(imageWidth, imageHeight);
    dishTwo.src = '../src/images/dish2.jpg';
    dishes.push(dishTwo);

    const dishThree = new Image(imageWidth, imageHeight);
    dishThree.src = '../src/images/dish3.jpg';
    dishes.push(dishThree);

    const dishFour = new Image(imageWidth, imageHeight);
    dishFour.src = '../src/images/dish4.jpg';
    dishes.push(dishFour);

    const dishFive = new Image(imageWidth, imageHeight);
    dishFive.src = '../src/images/dish5.jpg';
    dishes.push(dishFive);

    const dishSix = new Image(imageWidth, imageHeight);
    dishSix.src = '../src/images/dish6.jpg';
    dishes.push(dishSix);

    dishes.forEach((dish) => {
        const dishCard = document.createElement('div');
        dishCard.classList.add('card');
        const dishDescription = document.createElement('article');
        dishDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';
        dishDescription.classList.add('dish-description');
        dishCard.appendChild(dish);
        dishCard.appendChild(dishDescription);
        menuContainer.appendChild(dishCard);

    })

    contentContainer.appendChild(menuContainer);
    body.appendChild(contentContainer);






}