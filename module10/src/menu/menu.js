import menuItems from '../menu.json';
import menuItemsTemplate from '../menu-items.hbs';
import './themeChange';
import { addToCart } from '../cart/cart';

const refs={
    menu:document.querySelector('.js-menu')

}

const munuItemsJS ={
    menuItems, 
}

const markup = menuItemsTemplate(menuItems);

const addToOrder=(e)=>{
if(e.target.nodeName ==='BUTTON' && e.target.dataset.btn ==='cartBtn'){
    const id=e.target.closest('[data-id]').dataset.id
    const menuItem = munuItemsJS.menuItems.find(menuItem => menuItem.id===id)
    addToCart(menuItem)
}else return;
}

refs.menu.insertAdjacentHTML('afterbegin', markup);
refs.menu.addEventListener('click', addToOrder);