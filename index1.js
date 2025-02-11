for (let tag = "#"; tag.length <= 7; tag += "#"){
    console.log(tag)
}


for (let i = 1; i<=100; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    }
    else if (i % 3 === 0 && !(i % 5 === 0)){ // fizz
      console.log("Fizz");
    }
    else if (!(i % 3 === 0) && i % 5 === 0){
      console.log("Buzz");
    }
    else{
      console.log(i);
      }
}

// make chessboard
// if the index of i is odd, add a space to the start of the string.
// make a variable of the hashtags

let row = "# # # #"

for (let i = 1; i < 9; i++){
    if (i % 2 === 1){
        console.log(" " + row);
    }
    else{
        console.log(row);
    }
}

// for any size

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

// bindings

var a = 10; // global scope

if (a === 10){
  var a = 12;
  console.log(a)
}


let b = 10; // function scoped

if (b === 10){
  let b = 12;
  console.log(b);
}



const c = 10; // const = constant; cannot redefine anywhere

   