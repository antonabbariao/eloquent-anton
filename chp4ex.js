// create a counter

function createCounter(nums){ // use includes
    let output = {}; // output list
    let counterArray = []; // checking array
    for (let i = 0; i < nums.length; i++){ // iterating through the given array
        if (!counterArray.includes(nums[i])){ // if its a new number
            counterArray.push(nums[i]); // pushes number to the checking array
            let num = nums[i];
            output[num] = 1;
        }
        else{ // if its not a new number
            let num = nums[i];
            output[num] += 1;
        }
    }
   
    return output;
}

const counter = createCounter([1, 1, 2, 3])
console.log(counter)

// check palindrome

function isPalindrome(s){
    let check = "";
   
    for (let i = s.length-1; i >= 0; i--){
        check += s.charAt(i);
    }
    return check === s
}

const result = isPalindrome("abba");
console.log(result);

// check for dups

function hasDuplicates(nums){
    let list = createCounter(nums);
    let listKeys = Object.keys(list)
    for (let value of listKeys){
        if (list[value] > 1){
            return true;
        }
    }
    return false;
}

console.log(hasDuplicates([1,134,2,3]));

function hasDuplicates2(nums){
    // a set contains unique value MDN
    const seen = new Set();

    for (const num of nums){
        if (seen.has(num)){
            return true;
        }

        seen.add(num);
    }

    return false;
}