// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const gallery=document.querySelector('#gallery')

// const fragment = document.createDocumentFragment()

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// =========================================ex1==================================================

// const createImageCard = (image) => {
//   const li = document.createElement("li");
//   const galleryImg = document.createElement("img");
//   galleryImg.classList.add("gallery__img");
//   galleryImg.setAttribute("src", image.url);
//   galleryImg.setAttribute("alt", image.alt);
//   li.append(galleryImg);
//   return li;
// };
// const imageCards = images.map((image) => createImageCard(image));
// console.log(imageCards);
// gallery.append(...imageCards);
// gallery.classList.add("gallery");
// console.dir(gallery)

// ======================================ex2============================================================
let marcup = ''
images.forEach(image =>
  marcup +=`<li> <img class="gallery__img" src="${image.url}" alt="${image.alt}" /></li>`
  
)

gallery.insertAdjacentHTML("afterbegin", marcup)
gallery.classList.add("gallery");
