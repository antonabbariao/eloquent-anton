// arrays

const nums = [1, 2, 3]
nums.push(4)
nums.pop() // pops the back of the array
nums.unshift(0) // adds items to the front of the array
nums.shift() // pops the front of the array

console.log(nums.length)

for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

// slice returns copy of range
console.log(nums.slice(0, 2))
// splice removes a slice from the array

const nums2 = [100, 1, 2, 3, 4]
console.log(nums2.splice[0, 3]) // returns the slice

console.log(nums2) // mutates the array

// objects
// JSON -> javascript object notation

const obj = {
    name: "Jaime",
    address: {
        city: "Long Island City",
        country: "USA"
    },
    numbers: [1, 2, 3, 4, 5]
}

console.log(obj.name)
console.log(obj.address.country)

delete obj.numbers

// key => "A Good Name"

obj["A Good Name"] = false

console.log("yoyo" in obj) // false
console.log("city" in obj) // false
console.log("city" in obj.address)

for (const key of Object.keys(obj)){
    console.log(key)
}

// Object.assign

// this is how js implements inheritance 
const person = {name: "jaime", age: 40}

const teacher = Object.assign(person, { coursesTaught: ["programming", math]})

console.log(teacher)