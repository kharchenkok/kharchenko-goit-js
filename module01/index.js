//========================home-task-01============================================

// const name='Генератор захисного поля';
// let price=1000;
// console.log(`Обрано "${name}", ціна за штуку ${price} кредитів`)
// price +=price;
// console.log(`Обрано "${name}", ціна за штуку ${price} кредитів`)

//========================home-task-02===========================================

//===============examp-1============
// const total = 100; 
// const ordered = 100; 
// if(total>=ordered){
//     console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
// }
// else {
// console.log("На складі недостатньо товарів!");
// };

//===============examp-2===========
// const total=100;
// const ordered=prompt ('Будь ласка, вкажіть бажану кількість товару')
// if(isNaN(ordered)){
//     alert('Будь ласка, введіть числове значення');
// }
// else if(ordered===null||Number(ordered)===0){
//     alert('Ви не обрали жодної одиниці товару');
// }
// else if(total>=ordered){
//     alert("Замовлення оформлено, з Вами зв'яжеться менеджер!");
// }
// else{
//     alert("Вибачте, але на складі недостатньо товарів");
// }

//==========================================home-task-3=======================================
const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введіть, будь ласка, пароль');
let normalizeMessage = message.toLowerCase();
if (message===null) {
    message='Скасовано користувачем!';
}
else if (normalizeMessage===ADMIN_PASSWORD) {
    message='Ласкаво просимо!';
}
else{
    message='Доступ заборонений, невірний пароль!'
}
alert(message); 

//========================================home-task-4========================================
// const credits=23580; //кошти клієнта
// const pricePerDroid=3000; //вартість одного дрона
// let quantityDroid=prompt('Вкажіть, будь ласка, яку кількість дроїдів Ви бажаєте придбати?');
// if (quantityDroid===null) {
//     console.log('Скасовано користувачем!');
// }
// else if (condition) {
    
// }



