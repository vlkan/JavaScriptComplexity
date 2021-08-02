//var-let-const
let age;
console.log(age)

age = 42 
console.log(age)

const name = "Volkan"
console.log(name)

let name1 = "Volkan";
console.log(name1)

let str = "";

for (let i=0; i<10; i++){
    str = str.concat(i)
    console.log(str)
}

const myArr = [1,2,3];
console.log(myArr)

myArr.pop();
console.log(myArr)

const student = {
    name : "Volkan",
    age : 23
}
console.log(student)
Object.freeze(student)
student.name = "Önder"
console.log(student)

// student = {
//     name : "önder",
//     age : 23
// } error

//var global scope / functional scope
var val = 10;
console.log(val)

val = 30;
console.log(val)

var x = 1
console.log(x)

if(x == 1){
    var x = 10
    console.log(x)
}
console.log(x)

//let
let y = 2
console.log(y)

if(y == 2){
    let y = 20
    console.log(y)
}
console.log(y)

var x = 10
console.log(window.x) //x is propery of window because var is global scope

let z = 10
console.log(window.z) //undefined, same for const

//hoisting
console.log(t);
var t; //js firstly read the value, its hoisting. Not working with let
