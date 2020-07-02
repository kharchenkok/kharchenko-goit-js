import {default as galleryItems} from './gallery-items.js'

console.table(galleryItems)

const gallery =document.querySelector('.js-gallery')
const modalBox = document.querySelector('.js-lightbox')
const modalOverlay = document.querySelector('.lightbox__overlay')
const modalImage = document.querySelector('.lightbox__image')
const modalCloseBtn = document.querySelector('.lightbox__button')

let marcup = ''
galleryItems.forEach(item =>
  marcup +=`
  <li class="gallery__item">
  <a class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>
`
)
// gallery.innerHTML=marcup
gallery.insertAdjacentHTML('afterbegin',marcup)
console.dir(gallery);
console.log(gallery);
console.dir(gallery.children)


function modalBoxOpen(e) {
    event.preventDefault();
    if (e.target.nodeName !=="IMG") {
        return
    }
    modalBox.classList.add('is-open')
    modalImage.src = e.target.dataset.source;
    modalImage.alt = e.target.alt;

    modalBox.addEventListener('click', modalClose)
    document.addEventListener('keydown', modalClose)
    // document.addEventListener('keydown', flipImages)
}

function modalClose(e) {
    
    if( (e.target === modalOverlay) || e.target.dataset.action === 'close-lightbox'|| e.key === "Escape"){    
        modalImage.src = '';
        modalBox.classList.remove('is-open') 
        modalBox.removeEventListener('click', modalClose)
        document.removeEventListener('keydown', modalClose)
    } 
}


const imgArr = [...gallery.querySelectorAll('.gallery__image')]
console.dir(imgArr);





gallery.addEventListener('click', modalBoxOpen )



