// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і 
// змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}

const inputRef = document.querySelector('#font-size-control')
console.dir(inputRef)


const textRef = document.querySelector('#text')
console.dir(textRef)

const sizeControl=(event=>{
    textRef.style.fontSize=(Number(inputRef.value))+'px';

})

inputRef.addEventListener('input', sizeControl)