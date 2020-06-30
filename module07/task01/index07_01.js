// =========================home-task-01==================================

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const itemList=document.querySelector('#categories');
// console.log(itemList);
// console.dir(itemList);
// const numbOfItem=itemList.children.length;
// console.log(`В списке ${numbOfItem} категории`)


// // Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента 
// // (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// // Например для первой категории получится:

// // Категория: Животные
// // Количество элементов: 4

const arrLi = itemList.querySelectorAll('.item');
// const arrH2 = itemList.querySelector('h2').textContent;
console.log(arrLi);


// // const arrH2= document.querySelectorAll('h2')
// // console.log(arrH2);

// // console.log(arrLi);
// const newArrLi = Array.from(arrLi)
// console.log(newArrLi);
// console.log(itemList.querySelectorAll('h2'))
// // for(let i=0; i<arrLi.length; i+=1){
// //     const category = arrLi[i].children[0].textContent;
// //     console.log(category);
// //     const categoryList = arrLi[i].children[1].children.length;
// //     console.log(categoryList);
    
// // }
// arrLi.forEach(elem => 
//     console.log(itemList.querySelector('h2').textContent)
// );


// const categories = document.querySelector("#categories");

arrLi.forEach((element) => {
  console.log(`Категория: ${element.querySelector("h2").textContent}`);
  console.log(
    `Количество элементов: ${element.querySelector("ul").children.length}`
  );
});










// =====================home-task-02=========================================
