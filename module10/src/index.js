import menuItems from './menu.json';
import menuItemsTemplate from './menu-items.hbs';
import './styles.css';
import './js/themeChange';

// console.log(menuItems);
// console.log(menuItemsTemplate(menuItems));
const menu =document.querySelector('.js-menu')

let markup = menuItemsTemplate(menuItems);
// console.log(markup);

menu.insertAdjacentHTML('afterbegin', markup);
console.log(menu);






