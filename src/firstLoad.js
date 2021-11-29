'use strict';

const firstLoad = () => {
    const content = document.querySelector('#content');

    const mainDiv = document.createElement('div');
    
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'The Best Restaurant';
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const a1 = document.createElement('a');
    a1.textContent = 'link 1';
    const a2 = document.createElement('a');
    a2.textContent = 'link 2';
    const a3 = document.createElement('a');
    a3.textContent = 'link 3';
    ul.append(a1, a2, a3);
    nav.append(ul);
    header.append(h1, nav);
    const div1 = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', '/pexels-stokpic-5317.jpg');
    img.setAttribute('alt', 'food picture');
    div1.appendChild(img);
    const h2 = document.createElement('h2');
    h2.textContent = 'Welcome to The Best Restaurant';
    const div2 = document.createElement('div');
    div2.textContent = 'We use only fresh ingredients, our cook is the best in the world and we are the cheapest at the same time.'
        + ' Come and try our food on the first day opening of the restaurant!';
    const div3 = document.createElement('div');
    div3.textContent = '50% OFF TODAY!';

    content.append(header, div1, h2, div2, div3);
};

export default firstLoad;