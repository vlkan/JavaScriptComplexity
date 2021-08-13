console.log(this) //global object
console.log(this.location)
console.log(this.location.href)
console.log(window.location.href)

function func1() {
    console.log(this)
}
func1();

const val = {
    name : "Volkan",
    age : 30,
    surname : "App",
    fullName : function() {
        console.log(this)
        return this.name + " " + this.surname
    },
    family : {
        name : "Çağan",
        age : 30,
        surname : "App",
        fullName : function() {
            console.log(this)
            return this.name + " " + this.surname
        }
    } 
}
console.log(val)
console.log(val.fullName())
console.log(val.family.fullName())

const test = {
    name :"Name",
    fun: function(){
        console.log(this === test)
        console.log(this === window)
    }
}
test.fun()

const test2 = test.fun
test2()
console.log("------------------------")
const test3 = {
    name :"Name",
    fun: function(){
        console.log(this === test3)
        setTimeout(function() {
            console.log(this === test3)
            console.log(this === window)
        },2000)
    }
}
test3.fun()