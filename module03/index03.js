// ===================home-task-01===============================
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };
//   console.log(user);

//   user.mood='happy';
//   console.log(user);
  
//   user.hobby='skydiving';
//   console.log(user);

//   user.premium=false;
//   console.log(user);

//   =======ex1==========================

//   const keys=Object.keys(user)
//   console.log(keys)
//   for (const key of keys){
//       console.log(`${key}:${user[key]}`)
//   }
// ================ex2=======================
// for (const key of Object.keys(user)){
//     console.log(`${key}:${user[key]}`)
// }

// ===============home-task-02=================================================
// const countProps = function(obj) {
//     // const keys=Object.keys(obj);
//     return Object.keys(obj).length
    
// };
  
//   console.log(countProps({})); // 0
  
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3



// ===================home-task-03=================================================
// =======ex1==============================================
// const findBestEmployee = function(employees) {
    
//     let workResult= Object.values(employees);
//     // console.log(workResult)
//     let nameEmpl=Object.keys(employees);
//     // console.log(nameEmpl)
//     let bestResult=Math.max(...workResult);
//     // let indexBestResult=workResult.indexOf(Math.max(...workResult))
//     // console.log(indexBestResult)
//     let bestEmpl = nameEmpl[workResult.indexOf(Math.max(...workResult))]
//     return bestEmpl

// };


// ================ex2===============================

// const findBestEmployee = function(employees) {
//         let bestResult =0;
//         let nameBestEmpl;
//         for(let key in employees){
//             if(employees[key]>bestResult){
//                 bestResult=employees[key];
//                 nameBestEmpl=key;
//             }
//         }
//         return nameBestEmpl
    
//       };
  

//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
  
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
  
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux

// ==========================home-task04==================================

// ===================ex1=============================================
// const countTotalSalary = function(employees) {
//     let salaries=Object.values(employees)
//     let salaryTotal=0
//     for(let salary of salaries){
//         salaryTotal+=salary
//     }
//     return salaryTotal
// };

// ======================ex2============================================
// const countTotalSalary = function(employees) {
//     let salaryTotal=0
//     for(let key in employees){
    
//         salaryTotal+=employees[key]
//     }
//     return salaryTotal
// };


// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// =========================================home-task-05=======================================
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
    

// ===========ex1==================================================

//   const getAllPropValues = function(arr, prop) {
//       let propArray=[]
//       for (let element of arr){
//         //   console.log(element)
//           if(prop in element){
//               propArray.push(element[prop])
//             }
//         }
//         return propArray
    
//   };
  
// ===========ex2==================================================
// const getAllPropValues = function(arr, prop) {
//           let propArray=[]
//           for (let i=0; i<arr.length; i+=1){
//             //   console.log(arr[i])
//               if(arr[i][prop]){
//                 propArray.push(arr[i][prop])                
//                 }
//             }
//             return propArray
        
//       };


//   console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  
//   console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
//   console.log(getAllPropValues(products, 'category')); // []

// ======================home-task-06=====================================================================
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// =================ex1=====================================================

// const calculateTotalPrice = function(allProducts, productName) {
//     let totalPrice
//     for(let element of allProducts){
//         // console.log(element)
//         for(let key in element){
//             // console.log(key)
//             if (element[key] === productName){
//                 // console.log(productName)
//                 totalPrice=element.price*element.quantity
//             }
//         }  
//     }
//       return totalPrice
//     };
// ====================ex2====================================================
// const calculateTotalPrice = function(allProducts, productName) {
//     let totalPrice
//     for(let i=0; i<allProducts.length; i+=1){
//             if (allProducts[i]['name'] === productName){
            
//                 totalPrice=allProducts[i]['price']*allProducts[i]['quantity']
//             }
//         }  
    
//       return totalPrice
//     };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800