'use strict';

import firstLoad from './firstLoad';
import loadContact from './loadContact';
import loadMenu from './loadMenu';

firstLoad();

const content = document.querySelector('#content');

const setListener = () => {
    const buttons = document.querySelector('nav');
    buttons.addEventListener('click', function(e){
        // console.log(e.target.innerHTML);
        let b = e.target.innerHTML;
        if(b == 'Home') {
            firstLoad();
        } else if (b == 'Menu') {
            loadMenu();
        } else {
            loadContact();
        }
        setListener();
    });
};

setListener();

// loadContact();