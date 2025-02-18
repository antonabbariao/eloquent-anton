// take array of numbers
const nums = [1, 2, 3];
function product(nums){
    var sum = 1;
    for (let i = 0; i < nums.length; i++){
        sum = sum * nums[i];
    }
    return sum;
}

console.log(product(nums));

// now do it w reduce

const nums1 = [1, 2, 3, 4, 5];
const nums1Sum = nums1.reduce((acc, cur) => acc * cur, 1);
console.log(nums1Sum);

// flatten
const nums2 = [[1, 2], [3, 4], [5, 6]]; // using concat joins arrays together, push only retusn
const nums2Flatten = nums2.reduce((acc, cur) => acc.concat(cur), []); // cant use push only retursn a number
console.log(nums2Flatten);

// deep search
// create a new array of the path to iterate through as you go down the path
// for loop through the path 
// in the for loop check theres nothing left
// else, make the current iteration the inner value of that key

function deepSearch(obj, key){
    let keys = key.split("."); // creates a new array of keys

    for (let key of keys){ // go thru the keys array
        if (obj[key] === undefined){ // if no key in current iteration
            return null; // return null
        }
        obj = obj[key]; // this is to iterate thru to the next key
    }

    return obj; // returns the current key or value
}

const obj = {a: {b: {c: 3}}};
console.log(deepSearch(obj, "a.b.c"));

function groupAverageTestScoresByAge(students){
    const obj = students.reduce((acc, currStudent) => {
        //destructure the given student object
        const {name, age, grades} = students; 
        // now find out the grade average of that student
        const gradeAvg = grades.reduce((acc, cur) => acc + cur, 0) / grades.length;

        // now check if the students age is new in the thingy
        if (!acc[age]){ // if no basket for given color
            acc[age] = []; // create a new basket for the new toy if the basket for the color didnte xist
        }

        // then after you make the new basket
        // or already have the needed color basket for the color toy
        // you ultimately sort it into the baskets
        acc[age].push({name, gradeAvg});

        // then you return the accumulated objects
        return acc;
    }, {}); // default

}

const students = [{name: "Jaime", age: 30, grades: [94, 94, 94]}]; 

console.log(groupAverageTestScoresByAge(students));