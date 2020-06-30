// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.
const itemList = document.querySelector('#ingredients')
console.log(itemList);

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const fragment = document.createDocumentFragment()
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().
ingredients.forEach(ingredient =>{
    const itemList=document.createElement('li')
    itemList.textContent=ingredient
    fragment.append(itemList)


})
console.log(fragment);
itemList.append(fragment)
console.log(itemList);
