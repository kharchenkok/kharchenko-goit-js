// ===================home-task-6=================================
// let input =prompt('Введіть, будь ласка, число');
// const numbers = [];
// let inputNumb;
// let total = 0;

// do {
//         input = prompt('Введіть,будь ласка, число');
//         if (isNaN(input)) {
//             alert('Введіть, будь ласка,число');
//             continue; 

//             }else if(input!==null&&input!==''){
//                 inputNumb=Number(input);
//                 numbers.push(inputNumb);
//                 console.log(numbers);
//             };
//         if (input===null){
//             if(numbers.length>0){
//                 for(let number of numbers){
//                     total+=number;
//                 };
//             } else{
//                 console.log('Масив пустий');
//             }
//         };
        
//     } while(input !==null);
//     console.log(`Загальна сума чисел ${total}`);

// ===========================home-task-1===================================================
const logItems = function(items) {
    for (let i=0; i<items.length; i+=1){
        let positionNumb= items.indexOf(items[i])+1;
        
        console.log(`${positionNumb}-${items[i]}`)

    }
    
    
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ====================home-task-2==============================

// const calculateEngravingPrice = function(message, pricePerWord) {
//     const newArray= message.split(' ');
//     let totalPrice = newArray.length*pricePerWord
//     return totalPrice
//  }

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
        
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); 
        
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); 

// =======================home-task-3================================================================================



// ===========ex1===========================================================
// const findLongestWord = function(string){
//     let longestWord =' ';
//     const newArray = string.split(' ');
//     for(let arrayWord of newArray){
        
//         if(arrayWord.length>longestWord.length){
//             longestWord=arrayWord;
//         }
//     };
//     return longestWord
// };




// ==================ex2======================================================
// const findLongestWord = function(string){
//    let longestWord =' ';
//     let newArray = string.split(' ');
//     console.log(newArray)
//     for (let i=0; i< newArray.length; i+=1 ) {
//         if(newArray[i].length>longestWord.length){
//             longestWord=newArray[i];
//         }
//     }
//     return longestWord
// }
    
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'


// ====================home-task-4=========================================================================
// let formatString= function(string){
// if(string.length>=40){
//     let newString=string.slice(0,40)+'...';
//     return newString
// } else{
//     return string
// }}
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// console.log(formatString('Curabitur ligula sapien.'));
// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

// ========================home-task-5======================================================================
// const checkForSpam = function(message) {

//     console.log(message);
//     if( message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam') ) {
//         return true;
//     }else{
//         return false;
//     }
    
//   };
  
  
//   console.log(checkForSpam('Latest technology news')); // false
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
//   console.log(checkForSpam('Get best sale offers now!')); // true
  
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
  