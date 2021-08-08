import { getHomePage } from "./home.js";
import { getMenuPage } from "./menu.js";
import { getContactPage } from "./contact.js";
const createContent = (function() {
    
    //start page
    const content = document.querySelector('.content');
    content.appendChild(getHomePage());

    //menu page
    const menu = document.querySelector('#menu');
    menu.addEventListener('click', ()=> getMenuPage());
    
    //contact page
    const contact = document.querySelector('#contact');
    contact.addEventListener('click', ()=> getContactPage());
    
    //home page
    const home = document.querySelector('#home');
    home.addEventListener('click', ()=> getHomePage());
})();
