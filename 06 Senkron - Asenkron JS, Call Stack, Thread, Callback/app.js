// JS Single Thread
//JS Synchronous
//Call Stack

function func1() {
    console.log("first")
    func2();
    console.log("first again")
}
function func2() {
    console.log("second")
    func3();
    console.log("second again")
}
function func3() {
    console.log("third")
}
func1()

function sum(x, y) {
    return x + y
}
function ave(x, y) {
    return sum(x,y) / 2
}

let x = ave(6,8)
//console.log(x)

function task(message) {
    let n = 10000000;
    while(n>0) {
        n--
    }
    console.log(message)
}
//firstly run call stack
console.log('1')

setTimeout(() => {
    console.log('2')
}, 1000)

console.log('3')
console.log('4')

task('Success')

setTimeout(() => {
    console.log('5')
}, 2000)

task('Success 2')

//callback
const myName = () => {
    console.log("Volkan")
}
setTimeout(myName, 3000)

setTimeout(() => {
    console.log("Volkan")
}, 3000)

const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    alert("clicked")
    let pElem = document.createElement('p')
    pElem.textContent = 'This new paragraph'
    document.body.appendChild(pElem)
})

const books = [
    {name : "Pinball 1973", author: "Haruki"},
    {name : "Özgürlük", author: "Bauman"},
    {name : "Türkiye'de Çağdaşlaşma", author: "Niyazi Berkes"},
]
const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
}

const addBook = (newBook, callback) => {
    books.push(newBook)
    callback();
}
addBook({name : "Berlin Hatıralarım", author: "Hüsrev Gerede"}, listBooks)