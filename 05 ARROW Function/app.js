//arrow func expression
const square0 = (num) => { return (num*num) }
const square1 = num => (num*num)
//console.log(square1(2))

window.name = "Volkan"

function tellName() {
    console.log(this)
    console.log(this.name)
}
//tellName()

const person = {
    name : "Önder",
    tellName : function() {
        console.log(this)
        console.log(this.name)
    }
}
//person.tellName()

window.name = "App"

const tellName0 = () => {
    console.log(this)
    console.log(this.name)
}
//tellName0()

const person0 = {
    name : "önder",
    tellName : () => { 
        //thats the difference between normal and arrow func. it refer upside tellName func
        //arrow funcs does not have a this option so its refer other one.
        console.log(this)
        console.log(this.name)
    }
}
//person0.tellName()

const person1 = {
    name : "volkan",
    tellName : function() {
        console.log(this)
        console.log(this.name)

        setTimeout( () => {
            console.log(this)
            console.log(this.name)
        }, 2000)
    }
}
//person1.tellName()

const person2 = {
    name : "volkann",
    tellName : () => {
        console.log(this)
        console.log(this.name)

        setTimeout( () => {
            console.log(this)
            console.log(this.name)
        }, 2000)
    }
}
//person2.tellName()

const student = {
    examResult : function() {
        return this.name + " " + this.grade
    }
}

const student1 = {
    name : "Volkan",
    grade : 100
}
const student2 = {
    name : "Çağan",
    grade : 99
}

console.log(student.examResult.call(student1))
console.log(student.examResult.call(student2))