//======================================================home-task-01============================================

// const name='Генератор захисного поля';
// let price=1000;
// console.log(`Обрано "${name}", ціна за штуку ${price} кредитів`)
// price +=price;
// console.log(`Обрано "${name}", ціна за штуку ${price} кредитів`)

//======================================================home-task-02===========================================

//=======================================examp-1============
// const total = 100; 
// const ordered = 100; 
// if(total>=ordered){
//     console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
// }
// else {
// console.log("На складі недостатньо товарів!");
// };

//======================================examp-2===========
// const total=100;
// const ordered=prompt ('Будь ласка, вкажіть бажану кількість товару')
// if(isNaN(ordered)){
//     alert('Будь ласка, введіть числове значення');
// }
// // else if(ordered===null||Number(ordered)===0){
// //     alert('Ви не обрали жодної одиниці товару');
// // }

// else if(total>=ordered){
//     alert("Замовлення оформлено, з Вами зв'яжеться менеджер!");
// }
// else{
//     alert("Вибачте, але на складі недостатньо товарів");
// }

//===================================================home-task-3=======================================
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message = prompt('Введіть, будь ласка, пароль');
// if (message===null) {
//     alert('Скасовано користувачем!');
// }
// else if (message===ADMIN_PASSWORD) {
//     alert('Ласкаво просимо!');
// }
// else{
//     alert('Доступ заборонений, невірний пароль!');
// }

//======================================================home-task-4========================================
// const credits=23580;
// const pricePerDroid=3000; 
// let quantityDroid=prompt('Вкажіть, будь ласка, яку кількість дроїдів Ви бажаєте придбати?');
// quantityDroid = Number(quantityDroid);
// const totalPrice = quantityDroid * pricePerDroid;
// if (quantityDroid===null) {
//     console.log('Скасовано користувачем!');
// }else if(totalPrice<=credits){
//     const balanceCredits = credits - totalPrice;
//     console.log('Ви купили', quantityDroid, 'дроїдів, на Вашому рахунку залишилося', balanceCredits,'кредитів');
// }else {
//     console.log('На Вашому рахунку недостатньо коштів для купівлі',quantityDroid,'дроїдів');
// }

//=========================================================home-task-5=======================================
// let inputCity=prompt('Для оформлення доставки, будь ласка, вкажіть Вашу країну');
// let deliveryPrice
// switch (inputCity.toLowerCase()) {
//     case'китай':
//         deliveryPrice=100;
//         alert(`Доставка в ${inputCity} буде коштувати ${deliveryPrice} кредитів`);
//         break;

//     case'чилі':
//         deliveryPrice=250;
//         alert(`Доставка в ${inputCity} буде коштувати ${deliveryPrice} кредитів`);
//         break;

//     case'австралія':
//         deliveryPrice=170;
//         alert(`Доставка в ${inputCity} буде коштувати ${deliveryPrice} кредитів`);
//         break;

//     case'індія':
//         deliveryPrice=80;
//         alert(`Доставка в ${inputCity} буде коштувати ${deliveryPrice} кредитів`);
//         break;

//     case'ямайка':
//         deliveryPrice=120;
//         alert(`Доставка в ${inputCity} буде коштувати ${deliveryPrice} кредитів`);
//         break;

//     case'':
//         alert('Ви не ввели жодної країни');
//         break;

//     default:
//         alert('У вашій країні доставка недоступна');
//         break;
// }
// ================================================================home-task-6==================================
let input;
let total = 0;
// ==============================================while========================
while (true) {
        input = prompt('Введіть,будь ласка, число');
        if (isNaN(input)) {
            alert('Введіть, будь ласка,число'); 
        } else if (input === null) {
            total += Number(input);
            alert(`Загальна сума чисел дорівнює ${total}`); 
            break;
        } else {
            total += Number(input);
            alert(`Загальна сума чисел дорівнює ${total}`); 
                
        }
    } 
// =============================do-while====================================
// do {
//     input = prompt('Введіть,будь ласка, число');
//     if (isNaN(input)) {
//         alert('Введіть, будь ласка,число');
        
//     }else{
//         total += Number(input);
//         alert(`Загальна сума введених чисел ${total}`);

//     };
    
// } while(input !==null)
