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
    const result = cart.order.find(item => item.name === menuItem.name)
    if(!result){
        cart.order =[...cart.order, 
            {
            id:menuItem.id,
            name:menuItem.name,
            price:menuItem.price,
            quantity:1,
        }];
        getTotal();
        console.log(cart.order);

    }else{
        cart.order=cart.order.map(item => {
             if (item.name===menuItem.name){
                 return {
                     ...item, 
                     quantity:(item.quantity+1)
                 }
             }else{
                 return item
             }
        })
    }
    getTotal()
 }

 export const removeFromCart = (id) =>{
    cart.order = cart.order.filter(menuItem => menuItem.id !==id);
    // getTotal()
 }

export const getTotal = () =>{
    cart.totalQuantity = cart.order.reduce((acc,menuItem) =>{
        acc += menuItem.quantity;
        return acc
    },0)
    cart.totalPrice = cart.order.reduce((acc,menuItem) =>{
        acc += menuItem.price*menuItem.quantity;
        return acc
    },0)
};

refs.modalCartBtn.addEventListener('click', openCartModal)

