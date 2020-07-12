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
    let modalImageCurrentIndex = galleryItems.findIndex(element => element.original === modalImageCurrent);
    
    if (e.key === 'ArrowRight'){
      let newImageCurrentIndex = modalImageCurrentIndex +1
      
      if ( newImageCurrentIndex >= galleryItems.length){
            newImageCurrentIndex = 0;
      }
                  
      let newModalImage = modalImage.setAttribute('src', galleryItems[newImageCurrentIndex].original)
    }

    
    
    if (e.key === 'ArrowLeft'){
      let newImageCurrentIndex = modalImageCurrentIndex -1;
      if ( newImageCurrentIndex < 0 ){
        newImageCurrentIndex = galleryItems.length-1 ;
      }

      let newModalImage = modalImage.setAttribute('src', galleryItems[newImageCurrentIndex].original)
      
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



