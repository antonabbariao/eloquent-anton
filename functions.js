const square = function(x){
    return x * x;
}

// nested scope




function calc(){
    function add(a, b){
        return a + b;
    }

    return {
        add
    }
}

const calculate = calc();
console.log(calc.add(1, 2));

// arrow functions

const mult = (a, b) =>{
    return a * b;
}

const mult2 = (a, b) => a * b

function Person(){
    this.name = "Anton"
    return this
}

console.log(new Person())
// go over prototype
// arrow function doesnt have prototype
const PersonArrow = () => {
    this.name = "Anton"
    return this
}

// new PersonArrow() requires prototype
console.log(PersonArrow())

// optional arguments

function doSomething(a, b = 100){
    return a + b;
}
console.log(doSomething(100)) // output: 200
console.log(doSomething(100, 20)) // output: 120

// closure is a way to capture the partial application of a function

const add = (a, b) => a + b

// const addBy10 = (a) => add(a, 10)

// we usually have closures when a function returns a function

function add(a){
    return function (b){
        return a + b
    }
}

// a function is returning a function basically

const addBy10 = add(10)
const addBy100 = add(100)
const addBy500 = add(500)

console.log(addby10)

// factorial 
// n! = n * (n-1) * ... * 1

function factorial(n){
    if (n === 1){
        return 1
    }

    return n * factorial(n-1)
}