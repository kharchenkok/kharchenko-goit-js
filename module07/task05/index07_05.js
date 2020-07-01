// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. якщо інпут порожній, 
// в спані повинен відображатися рядок 'незнайомець'.

{/* <input type="text" placeholder="Ваше ім'я?" id="name-input" />
<h1>Привіт, <span id="name-output">незнайомець</span>!</h1>  */}

const inputName = document.querySelector('#name-input')
const outputName = document.querySelector('#name-output')

console.log(inputName.textContent);
console.log(outputName.textContent);

const getName=(event =>
        inputName.value ==="" ? outputName.textContent= 'незнайомець' : outputName.textContent=inputName.value
    )

    // ==========================ex2===============================================================
// const getName=(event =>
//     event.target.value==="" ? outputName.textContent= 'незнайомець' : outputName.textContent=event.target.value
// )


inputName.addEventListener('input', getName)