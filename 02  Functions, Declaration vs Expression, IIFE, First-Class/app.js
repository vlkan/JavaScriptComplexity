(function(){
    console.log(5 + 12)
})(); //IIFE

//functions
//declartion

function square(num){
    return (num * num)
}
console.log(square)
console.log(square(5))

//hoisted supported

//function expression
//function expression is not support hoisted
const summ = function(num){
    return (num + num)
}
console.log(summ)
console.log(summ())
console.log(summ(5))

//fisrt-class func
const myArr = [6, "Volkan", function() {console.log("Arr Element")}]
myArr[2]();

const myObj = {
    age : 5,
    name : "Volkan",
    func : function() {console.log("Obj Element")}
}
myObj.func();

console.log(20 + (function() {return 10})()) //IIEF

const addFive = function(num, func){
    console.log(num + func())
}
addFive(10, function() {return 5})

const myFunc = function(num){
    return function toDouble(){
        console.log(num*2)
    }
}
myFunc(10)()

const result = myFunc(7)
console.log(result)//wait for sub functions
result()//call the sub functions

//IIFE Immediately Invocable Function Expression

const sum = function(){
    console.log(5 + 12)
}()
console.log(sum) //undefined

//every function is also object
console.log(square.name)