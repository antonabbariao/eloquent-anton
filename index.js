// number (fit 128 bits)
// 1, 3.14

// bigint 
// new BigInt("9348758934572353")

// 3e5 = 3 * 10^5

// operators (+, -, /, *)

// mod 15 % 5 = 0

// Number 

console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NaN)

// console.error() --> shows errors
// console.warn()

// 1. Red errors --> console.error
// 2. Yellow errors --> bad but not broken code
// 3. Info --> console.log || console.info 

// Strings 
// "javascript"
// 'js'
// 
// String interpolation 
//
// const name = "anton"
// const helloAnton = backticks command

// Special characters
// \n --> new line 
// \t --> tab / indent

// String concatenation
const firstName = "jaime"
const lastName = "abbariao"

console.log(firstName + " " + lastName)

// booleans
// true & false
// == --> compares the value between two items and if necessary will cast the values to a similar type
console.log(1 == "1") // true
// === --> compares the values strictly 
console.log(1 === "1") // false
// != 
console.log(1 != "1") // false
// !==
console.log(1 !== "1") // true

// <= | >= | < | >

// logical operators 
console.log("----------")
// && 
console.log(true && true)
// ||
console.log(false || true)
// !
console.log(!true && false)

console.log("---------")

// ternary operator 
// (condition) ? (if-true-do-this) : (if-false-do-this)
console.log(Math.random() < 0.5 ? true : false)

// Empty values
// null | undefined

// null --> empty value 
// undefined --> not initialized in memory 

let turtle // undefined

let squirrel = null // null

// wonky parts of js 
console.log(8 * null) // my guess = null, null is 0

console.log("5" - 1) // my guess

console.log("5" + 1) // my guess: 6, actual 51

console.log("5" * 2) // my guess: 10

console.log("five" * 2) // error, actual: NaN

console.log("----------")

console.log(false == 0) // undefined

console.log(true == 0)

console.log(Boolean(0)) // any non-zero value when cast to a boolean will be true

console.log("----------")

// weird checks that r useful 
console.log(null == undefined) // my guess: false, actual: true

// short circuiting booleans

function expensiveOperation(){
    // ...
    console.log("Oh no")
}

const aCondition = false
const bCondition = true

// How do i make sure that we only call expensiveOperation() when a condition is true
console.log(bCondition && expensiveOperation())

// fallback value

// truthy value is a value that evaluates to true if casted as a boolean
// falsy value is a value that evaluates to false if casted as a boolean
console.log(null || "user") // expected: "user"
console.log(1 || "user") // expected: "1"
console.log("" || "jaime") // expected: "jaime"
console.log(0 || 5) // expected: 5

// ?? operator --> nullish coalescing operator 
// expects the value to fail only if they are null or undefined
console.log(0 || 100) // expected: 100
console.log(0 ?? 100) // expected: 0
console.log("" ?? 100) // expected: ""
console.log(null ?? 100) // expected: 100
console.log(undefined ?? 100) // 



