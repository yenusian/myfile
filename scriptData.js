//Task 1
let name = "Yenglik";
console.log(name);

name = "Aika";
console.log(name);

const birthdayYear = 2000;
console.log(birthdayYear);

// birthdayYear = 2007;
// console.log(birthdayYear);

//Task 3
let int = 19;
console.log(int);
console.log(typeof int);

let str = "2020"
console.log(str);
console.log(typeof str);

let boolean = true;
console.log(boolean);
console.log(typeof boolean);

let empty = null;
console.log(empty);
console.log(typeof empty);

let undefinedValue; 
console.log(undefinedValue);
console.log(typeof undefinedValue);
 
let notANumber = NaN;
console.log(notANumber);
console.log(typeof notANumber);

//Task 4 
//String to integer
let strNum = Number(str);
console.log(strNum);
console.log(typeof strNum);

//Integer to string
let numStr = String(int);
console.log(numStr);
console.log(typeof numStr);

//Null to integer, string
console.log(Number(empty)); // 0
console.log(String(empty)); // null

//Undefined to integer, string
console.log(Number(undefinedValue)); // NaN
console.log(String(undefinedValue)); // undefined

//Task 5
let num = 12345678;
console.log(num);
console.log(typeof num);
console.log(String(num));
//Динамическая типизация позволяет переменным менять свой тип данных в процессе выполнения программы.

//Task 6
let username = prompt("Write your name: ")
let age = prompt("Write your age: ")
console.log(username, age);