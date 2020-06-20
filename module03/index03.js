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
const countTotalSalary = function(employees) {
    let salaries=Object.values(employees)
    // console.log(salaries)
    let salaryTotal=0
    for(let salary of salaries){
        // console.log(salary)
        salaryTotal+=salary
    }
    return salaryTotal
};

// ======================ex2============================================
// const countTotalSalary = function(employees) {
//     let salaryTotal=0
//     for(let key in employees){
    
//         salaryTotal+=employees[key]
//     }
//     return salaryTotal
// };


console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400