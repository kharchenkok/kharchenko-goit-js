//=====home-task-01======

// const name='Генератор захисного поля';
// let price=1000;
// console.log(`Обрано "${name}", ціна за штуку ${price} кредитів`)
// price +=price;
// console.log(`Обрано "${name}", ціна за штуку ${price} кредитів`)

//=====home-task-02=====

//====exam-1====
// const total = 100; 
// const ordered = 100; 
// if(total>=ordered){
//     console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
// }
// else {
// console.log("На складі недостатньо товарів!");
// };

//====exam-2===
const total=100;
const ordered=prompt ('Будь ласка, вкажіть бажану кількість товару')
if(isNaN(ordered)){
    console.log('Будь ласка, введіть числове значення');
}
else if(ordered===null||Number(ordered)===0){
    console.log('Ви не обрали жодної одиниці товару');
}
else if(total>=ordered){
    console.log("Замовлення оформлено, з Вами зв'яжеться менеджер");
}
else{
    console.log("Вибачте, але на складі недостатньо товарів");
}