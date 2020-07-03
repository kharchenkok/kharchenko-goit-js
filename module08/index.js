import {default as galleryItems} from './gallery-items.js'

console.table(galleryItems)

const gallery =document.querySelector('.js-gallery')
const modalBox = document.querySelector('.js-lightbox')
const modalOverlay = document.querySelector('.lightbox__overlay')
const modalImage = document.querySelector('.lightbox__image')
let modalImageCurrent;
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
gallery.insertAdjacentHTML('afterbegin',marcup)
// console.dir(gallery);
// console.log(gallery);

function modalBoxOpen(e) {
    e.preventDefault();
    if (e.target.nodeName !=="IMG") {
        return
    }     
    modalBox.classList.add('is-open')
    modalImage.src = e.target.dataset.source;
    modalImage.alt = e.target.alt;

    modalBox.addEventListener('click', modalClose)
    document.addEventListener('keydown', modalClose)
    document.addEventListener('keydown', flipImages)
  }
  
  
  function flipImages (e){
    modalImageCurrent = modalImage.getAttribute('src')
    let modalImageCurrentInd = galleryItems.findIndex(element => element.original === modalImageCurrent);
    console.log(modalImageCurrentInd);
    if (e.key === 'ArrowRight'){
      console.log(e);
      
      let newModalImage = modalImage.setAttribute('src', galleryItems[modalImageCurrentInd +1].original)
    }
    if (e.key === 'ArrowLeft'){
      let newModalImage = modalImage.setAttribute('src', galleryItems[modalImageCurrentInd -1].original)
    }
  
  }

function modalClose(e) {
    if( (e.target === modalOverlay) || e.target.dataset.action === 'close-lightbox'|| e.key === "Escape"){    
        modalImage.src = '';
        modalBox.classList.remove('is-open') 
        modalBox.removeEventListener('click', modalClose)
        document.removeEventListener('keydown', modalClose)
    } 
}

gallery.addEventListener('click', modalBoxOpen )



