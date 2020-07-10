import menuItems from './menu.json';
import menuItemsTemplate from './menu-items.hbs';
import './styles.css';
import './js/themeChange';
import './js/pagination';

// console.log(menuItems.length);
// console.log(menuItemsTemplate(menuItems));
const menu =document.querySelector('.js-menu')



let markup = menuItemsTemplate(menuItems);


menu.insertAdjacentHTML('afterbegin', markup);








