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
const countProps = function(obj) {
    // const keys=Object.keys(obj);
    return Object.keys(obj).length
    
};
  
  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3