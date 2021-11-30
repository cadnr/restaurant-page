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

    const divFood1 = document.createElement('div');
    const divFood2 = document.createElement('div');
    const divFood3 = document.createElement('div');
    const divFood4 = document.createElement('div');
    const divFood5 = document.createElement('div');
    divFood1.textContent = 'Food 1';
    divFood2.textContent = 'Food 2';
    divFood3.textContent = 'Food 3';
    divFood4.textContent = 'Food 4';
    divFood5.textContent = 'Food 5';
    divMenu.append(divFood1, divFood2, divFood3, divFood4, divFood5);

    content.append(header, divMenu);

};

export default loadMenu;