'use strict';

const loadMenu = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const mainDiv = document.createElement('div');
    
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'The Best Restaurant';
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const a1 = document.createElement('a');
    a1.textContent = 'Home';
    const a2 = document.createElement('a');
    a2.textContent = 'Menu';
    const a3 = document.createElement('a');
    a3.textContent = 'Contact';
    ul.append(a1, a2, a3);
    nav.append(ul);
    header.append(h1, nav);

    const divMenu = document.createElement('div');
    divMenu.setAttribute('class', 'food-menu');

    const images = [
        './img/food1-pexels-pixabay-315755.jpg',
        './img/food2-pexels-pixabay-357573.jpg',
        './img/food3-pexels-julie-aagaard-2097090.jpg',
        './img/food4-pexels-dzenina-lukac-1583884.jpg',
        './img/food5-pexels-elli-1854652.jpg',
    ];
    
    
    for (let i = 0; i < 5; i++) {
        const divFood = document.createElement('div');
        divFood.textContent = 'Food ' + [i+1];
        divFood.classList.add('food');
        const img = document.createElement('img');
        img.setAttribute('src', images[i]);
        divFood.appendChild(img);
        divMenu.appendChild(divFood);

    };

    content.append(header, divMenu);

    // const buttons = document.querySelector('nav');
    // buttons.addEventListener('click', function(e){
    //     console.log(e.target.innerHTML);
    //     let b = e.target.innerHTML;
    //     if(b == 'Home') {
    //         firstLoad();
    //     } else if (b == 'Menu') {
    //         loadMenu();
    //     } else {
    //         loadContact();
    //     }
    // });
};

export default loadMenu;