// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
// При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Створити</button>
//   <button type="button" data-action="destroy">Очистити</button>
// </div>

// <div id="boxes"></div>



const controlsRef = document.querySelector('#controls')
const inputNumbRef = controlsRef.querySelector('input')
// console.dir(inputNumbRef)
// console.log(inputNumbRef)
const renderBtn = document.querySelector('button[data-action="render"]')
const destroyBtn = document.querySelector('button[data-action="destroy"]')
const boxesRef=document.querySelector('#boxes')


const createBoxes=(amount =>{
    amount=Number(inputNumbRef.value)
    console.log(amount);
    let markup=''
    let x = 30;
    for (let i=1; i<=amount; i+=1){
        const getBackgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        const getBorderColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        x+=10;
        markup += `<div class="newBox" style="width:${x}px; height:${x}px; border:2px solid ${getBorderColor} ; background-color:${getBackgroundColor}"></div>`;
    };
    boxesRef.innerHTML=markup;
    console.dir(boxesRef.children.length)

    
})

const destroyBoxes=(event =>{
    inputNumbRef.value = '';
    boxesRef.innerHTML = '';
})


renderBtn.addEventListener('click', createBoxes)
inputNumbRef.addEventListener('change',createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)