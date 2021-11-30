'use strict';

const loadContact = () => {
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

    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `<div class="contact-card">
    <div>The Best Restaurant</div>
    <div>Kitchen st.</div>
    <div>Food City</div>
    <div>Email adress: adress@mail.com</div>
    <div>Telephone number: 123 789 456</div>
    </div>`;

    content.append(header, contactInfo);
};

export default loadContact;