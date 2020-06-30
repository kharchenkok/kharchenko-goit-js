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
// console.log(itemList);
// console.dir(itemList.querySelectorAll('.item'));
// console.dir(itemList.querySelectorAll('h2'));
// console.dir(itemList.children);

console.log(`В списке ${itemList.children.length} категории`);

// ===================ex1==============================================
const itemArr=document.querySelectorAll('.item')
// // console.log(itemArr);


// for(let i=0; i<itemArr.length; i+=1){
//         const category = itemArr[i].children[0].textContent;
//         console.log(`Категория: ${category}`);
//         const categoryList = itemArr[i].children[1].children.length;
//         console.log(`Количество элементов: ${categoryList}`);
        
//     }
for(let i=0; i<itemArr.length; i+=1){
            const category = itemArr[i].querySelector('h2').textContent;
            console.log(`Категория: ${category}`);
            const categoryList = itemArr[i].querySelector('ul').children.length;
            console.log(`Количество элементов: ${categoryList}`);
            
        }
// ===================ex2================================================
// itemArr.forEach(element => {
    
//     console.log(`Категория:${element.querySelector('h2').textContent}`);
//     console.log(`Количество элементов:${element.querySelector('ul').children.length}`);
    
// })