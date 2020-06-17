// ===================home-task-6=================================
let input =prompt('Введіть, будь ласка, число');
const numbers = [];
let inputNumb;
let total = 0;
// let i=0
// numbers.push(input);
// for(const number of numbers){
    
//     total += input;
//     console.log(total);

// }
// for(i=0; i<numbers.length; i+=1){

// }

do {
        input = prompt('Введіть,будь ласка, число');
        if (isNaN(input)) {
            alert('Введіть, будь ласка,число');
            continue; 
        }else if(input!==null&&input!==''){
            inputNumb=Number(input);
            numbers.push(inputNumb);
            // total += inputNumb;
            // alert(`Загальна сума введених чисел ${total}`);
            console.log(numbers);
    
        };
        if (input===null){
            if(numbers.length>0){
                for(let number of numbers){
                    total+=number;
                };
            } else{
                console.log('Масив пустий');
            }
        }
        
    } while(input !==null);
    console.log(`Загальна сума чисел ${total}`);
