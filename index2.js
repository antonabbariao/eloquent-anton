// minimum function
function minimum(x, y){
    return(x > y ? y : x);
}

console.log(minimum(3, 1));

// recursion
function isEven(x){
    if (x == 0){
        return true;
    }
    if (x == 1){
        return false;
    }
    else{
        return isEven(x-2);
    }
}
console.log(isEven(11));

// bean counting 
function countBs(str, char){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == char){
            count++;
        }
    }
    return count;
}

console.log(countBs("antonio abbariaa", "a"));

