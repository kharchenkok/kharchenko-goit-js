import menuItems from './menu.json';
import menuItemsTemplate from './menu-items.hbs';
import './styles.css';
import './js/themeChange';

// console.log(menuItems);
// console.log(menuItemsTemplate(menuItems));

let markup = menuItemsTemplate(menuItems);
const menu = document.querySelector('.js-menu').insertAdjacentHTML('afterbegin', markup);


