const person0 = {
    name:"Volkan",
    surname:"App",
    age:30,
    languages:["Turkish", "English", "Spanish"],
    fullname: function(){
        return this.name + " " +this.surname
    },
    adress:{
        city:"Ankara",
        district:"Mamak"
    }
}
console.log(person0.fullname())

//Object Literal

const person = {
    name:"Volkan",
    surname:"App",
    age:30,
    languages:["Turkish", "English", "Spanish"],
    fullname: function(){
        return this.name + " " +this.surname
    }
}
//dot notation
console.log(person.name)
person.job = "Student"

//bracket notation
console.log(person['job'])
console.log(person['na'+'me'])

person.address = {

};
person.address.city = "Ankara"

//constructor
function Person0 (name, surname, age) {
    //const obj = {}
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullname = function(){
        return this.name + " " +this.surname
    }
}
const person1 = new Person0("Volkan", "App", 29)
const person2 = new Person0("Volkan", "App", 29)
console.log(person1)
console.log(person2)

const person9 = new Object();
person9.name = "Volkan"
person9.surname = "App"
person9.age = 30
person9.fullname = function() {
    console.log(this);
    return this.name + " " + this.surname;
}

console.log(person9)
console.log(person9.age)
console.log(person9.fullname())