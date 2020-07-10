import * as basicLightbox from 'basiclightbox'
import {cart} from "../cart/cart"




export const openCartModal=()=>{
    const templateModal=document.querySelector('#modal')
    const instance = basicLightbox.create(templateModal,{
        onShow: (instance) => {
            instance.element().querySelector('.modalBtn').onclick = instance.close
        }
    })
    instance.show()

}
