// map
// creates new array after transforming the values in the array

const a = [1, 2, 3]

console.log(a.map((item) => item * 2)); // returns [2, 4, 6]
console.log(a.filter((item) => item < 2)); // returns [1]
console.log(a.reduce((acc, item) => acc + item));

const b = [{age: 17} , {age: 19}, {age: 20}]
console.log(
    // acc = {age : 17}, item = { age: 19}
    // acc = 36, item = { age: 20 }
    b.reduce((acc, item) => acc.age + item.age)
)

console.log(
    b.reduce((acc, item) => acc + item.age, 0)
)

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