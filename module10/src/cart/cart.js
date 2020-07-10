import { openCartModal } from "../modals/cartModal";

const refs={
    modalCartBtn:document.querySelector('.toolbar__cart-button')
}
export const cart = {
    order:[],
    totalPrice:0,
    totalQuantity:0,

};
export const addToCart=(menuItem) =>{
    cart.order =[...cart.order, 
        {
        id:menuItem.id,
        name:menuItem.name,
        price:menuItem.price,
        quantity:1,
    }];
    getTotal();
    console.log(cart.order);
    
 }

 const removeFromCart = (id) =>{
    cart.order = cart.order.filter(menuItem => menuItem.id !==id);
    getTotal()
 }

const getTotal = () =>{
    cart.totalQuantity = cart.order.reduce((acc,menuItem) =>{
        acc += menuItem.quantity;
        return acc
    },0)
    cart.totalPrice = cart.order.reduce((acc,menuItem) =>{
        acc += menuItem.price;
        return acc
    },0)
};

refs.modalCartBtn.addEventListener('click', openCartModal)

