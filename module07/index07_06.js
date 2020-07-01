// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символів"
/> */}
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
const inputText = document.querySelector('#validation-input')
const checkLength=document.querySelector('[data-length="6"]')
console.log(Number(checkLength.dataset.length));
const checkValid= (event=>{
 
 if(event.target.value.length === Number(checkLength.dataset.length)){
     
    inputText.classList.add('valid')
    inputText.classList.remove('invalid')
}else{
    
    inputText.classList.add('invalid')
    inputText.classList.remove('valid')
 }
 
})

// inputText.addEventListener('input', checkValid)
inputText.addEventListener('blur', checkValid)
