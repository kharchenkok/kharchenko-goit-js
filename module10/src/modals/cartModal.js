import * as basicLightbox from 'basiclightbox';
import {cart} from "../cart/cart";
import template from "../cart/cartTemplate.hbs";
import {removeFromCart} from "../cart/cart"
import {getTotal} from "../cart/cart"

export const openCartModal=()=>{
    const markup = template(cart.order)
    const instance = basicLightbox.create(
        `
        <div class = "modal">
        <button class="modalBtn">Закрыть корзину</button>
        <div class="modal__form-wrapper">
        <h2 class="modal__form-title">Ваш заказ:</h2>
        ${cart.order.length >0 ? `<ul class="modal__form-list">${markup}</ul>` : "<p>Корзина пуста</p>"}
        <hr>
        <div class = "cart-order-total">
        <span class="cart-order__total-quantity"><b>Количество заказаных блюд:  </b> ${cart.totalQuantity} шт.</span>
        <span class="cart-order__total-price"><b>Общая сумма заказа:  </b> ${cart.totalPrice} кредитов</span>
        </div>
        ${cart.order.length>0 ? "<button class ='order-button'>Подтвердить заказ</button>" : ''}
        </div>
        </div>`,
        {
        onShow: (instance) => {
            instance.element().querySelector('.modalBtn').onclick = instance.close
        }
    })
    instance.show()
    const removeCartItem = (e) =>{
        if(e.target.nodeName === 'BUTTON' && e.target.classList.contains("cart__order-remove")){
            removeFromCart(e.target.dataset.id)
            document.querySelector('.modal__form-list').innerHTML = template(cart.order)
            getTotal()
            document.querySelector('.cart-order__total-quantity').innerHTML = `<b>Количество заказаных блюд:  </b> ${cart.totalQuantity} шт.`
            document.querySelector('.cart-order__total-price').innerHTML = `<b>Общая сумма заказа:  </b> ${cart.totalPrice} кредитов`
        }
    }
    document.querySelector('.modal__form-list').addEventListener('click', removeCartItem)

}
