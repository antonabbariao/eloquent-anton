// sum of a range

// range
function range(start, end, step = start < end ? 1 : -1){
    let array = [];
    if (step > 0){
        for (let i = start; i <= end; i += step){
            array.push(i);
        }
    }
    else{ // if descending 
        for (let i = start; i >= end; i += step){
            array.push(i);
        }
    }
    return array;
}

console.log(range(5, 2, -1));

// sum

// function sum(start, end){
//     let array = range(start, end); // new range array
//     let sum = 0;
//     for (let i = 0; i < array.length; i++){ // index thru each num in array
//         sum += array[i];
//     }
//     return sum;
// }

function sum(array){
    let sum = 0;
    for (let value of array){
        sum += value;
    }
    return sum;
}
console.log(sum(range(1,10)))




// reversing an array
let myArray = ["A", "B", "C"];
function reverseArray(array){
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}


console.log(reverseArray(myArray));

let arrayValue  = [1, 2, 3, 4];

function reverseArrayInPlace(arr){
    for (let i = 0; i <= arr.length/2; i++){
        let current = arr[i]; // store current number from the left
        arr[i] = arr[arr.length-1-i]; // store the mirrored number in the former current index
        arr[arr.length-1-i] = current; // replcae the mirror number with the stored number before
    }
    return arr;
}

console.log(reverseArrayInPlace(arrayValue));

// list

function arrayToList(array){
    let list = null;
    for (let i = array.length-1; i >= 0; i--){ // starts at the end of the array, list starting with null
        list = {value: array[i], rest: list}; // every iteration, the last list iteration is stored in the current list iteration
    } // null is the first iteration, therefore the last node since going backwards
    return list;
}

function listToArray(list){ // look over
    let array = [];
    for (let i = list; i; i = i.rest){ // starts at first i, goes for as long as i is truthy, 
        array.push(i.value); // then iterates to the next value by moving to the next node (.rest)
    }
    return array;
}

function prepend(value, list){ // takes element and list, creates new list, adds value to the front, rest is rest
    return {value, rest: list};
}

function nth(list, num){ // returns element at given position in the list ??
    if (!list){ // not a list?
        return undefined;
    }
    else if (num === 0){ // num is zero then just return current node
        return list.value;
    }
    else{ // 
        return nth(list.rest, num+1);
    }
}

// deep comparison

function deepEqual(a, b){ // ??
    if (a === b){ // see if both value and type r equal
        return true;
    }
    else if (a == null || b == null || typeof a != "object" || typeof b != "object"){ 
        return false; // if any are wrong then will go to false due to conditions
    }
    // now compare keys
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);

    if (aKeys.length != bKeys.length){ // first check if keys lengths are identical
        return false;
    }
    
    for (let value of aKeys){ // index thru one set of keys
        if (!(bKeys.includes(value)) || !deepEqual(a[value], b[value])){ // check if keys in aKeys are included in bKeys or check if they arent identical 
                return false; // if not then false
        }
    }

    return true; // passed all conditions
    
}

function listToArray(list){
    let curr = list
    const result = []

    while (curr !== null){
        const { value, rest } = curr
        result.push(value)
        curr = rest
    }

    return result
}



 






