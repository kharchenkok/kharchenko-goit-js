// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//  Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в 
// консоль текст заголовка элемента (тега h2) и количество элементов в категории
//  (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const itemList = document.querySelector('#categories')
console.log(itemList);
console.dir(itemList.querySelectorAll('.item'));
console.dir(itemList.querySelectorAll('h2'));
console.dir(itemList.children);

// console.log(`В списке ${itemList.children.length} категории`);

// ===================ex1==============================================
for(let i=0; i<itemList.length; i+=1){
    const h2Arr = itemList[i].children[0].textContent;
    console.log(h2Arr);
};

