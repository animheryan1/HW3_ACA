//Problem 1
function allOdd(num) {
    if (num === 0) {
        return true;
    }
    return allOdd(Math.floor(num / 10)) && num % 2 !== 0;
}

console.log(allOdd(4211133));
console.log(allOdd(7791));
console.log(allOdd(5));

function findMinPositive(arr, currMin = arr[0]) {
    if (arr.length === 0) {
        return currMin < 0 ? -1 : currMin;
    }
    if (arr[arr.length - 1] < 0 || arr[arr.length - 1] > currMin) {
        arr.pop();
        return findMinPositive(arr, currMin);
    }
    currMin = arr[arr.length - 1];
    arr.pop();
    return findMinPositive(arr, currMin);

}

console.log(findMinPositive([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(findMinPositive([45, -9, 15, 5, -78]));
console.log(findMinPositive([-5, -9, -111, -1000, -7]));

//Problem3
function fibonacci(n) {
    if (n <= 2) {
        return [1, 1].slice(0, n);
    }
    let values = fibonacci(n - 1);
    values.push(values[values.length - 1] + values[values.length - 2]);
    return values;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(10));

//Problem4
function makeFlat(arr, i = 0, result = []) {
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? makeFlat(cur) : cur)
    }, []);
}

console.log(makeFlat([1, [3, 4, [1, 2]], 10]));
console.log(makeFlat([14, [1, [[[3, []]], 1], 0]]));

//Problem5
function digitSum(num) {
    if (num <= 9) {
        return num;
    }
    return digitSum(num % 10 + digitSum(Math.floor(num / 10)));
}
console.log(digitSum(14));
console.log(digitSum(29));
console.log(digitSum(999999999999));