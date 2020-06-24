// =================home-task-01===========================================
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. 
// В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения 
// полей login и email объекта который его вызвал.

// const Account=function(login,email){
//     this.login=login;
//     this.email=email;
// }

// Account.prototype.getInfo=function(){
//     return console.log(`Login: ${this.login}, Email: ${this.email}`)
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account('Mangozedog','mango@dog.woof')
// console.log(mango);
// // const mango = new Account({
// //   login: 'Mangozedog',
// //   email: 'mango@dog.woof',
// // });
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
    
// const poly = new Account('Poly','poly@mail.com');
// console.log(poly);
// // const poly = new Account({
// //   login: 'Poly',
// //   email: 'poly@mail.com',
// // });
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// ========================home-task-02==============================
// // Напиши класс User для создания пользователя со следующим свойствами:

// // name - строка
// // age - число
// // followers - число
// // Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// class User{
//     constructor(name,age,followers){
//         this.name=name;
//         this.age=age;
//         this.followers=followers
//     }
//     getInfo(){
//         return console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//     }
// }

// const mango = new User('Mango',2,20);
// console.table(mango)
// // const mango = new User({
//     //   name: 'Mango',
//     //   age: 2,
//     //   followers: 20,
//     // });
    
//     mango.getInfo(); // User Mango is 2 years old and has 20 followers
    
// const poly = new User('Poly',3,17);
// console.table(poly)
// // const poly = new User({
// //   name: 'Poly',
// //   age: 3,
// //   followers: 17,
// // });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// ==================================home-task-03=========================================
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих
class Storage{
    constructor(arrayProd){
        this.items=arrayProd
    }
    getItems(){
        return this.items

    }
    addItem(item){
        return this.items.push(item)
    }
    removeItem(item){

        if(this.items.includes(item)){
            this.items.splice(this.items.indexOf(item),1)
        }
        
        return this.items
        
    }
    
}






const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);
console.log(storage);
console.log(storage.items.indexOf('Пролонгер'));
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

