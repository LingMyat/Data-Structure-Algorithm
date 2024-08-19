const totalSum = (total) => {
    let sum = 0

    for (let i = 0; i < total; i++) {
        sum += i
    }

    return sum;
}

const totalSumRec = (total, currentIndex = 0, sum = 0) => {
    if (currentIndex === total) {
        return sum;
    }

    return totalSumRec(total, currentIndex + 1, sum + currentIndex);
}
console.log(totalSum(10));
console.log(totalSumRec(10));
console.log('====================================');

//Factorial

const factorial = (num) => {
    if (num === 1) {
        return 1;
    }

    return factorial(num - 1) * num;
}

console.log(factorial(5));

//Fibonacci
//0 1 1 2 3 5 8 13
// index + func(index -1)

const fibonacci = (num) => {
    if(num <= 1) { 
        return num;    
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= num; i++) {
        const next = a + b;
        a = b;
        b = next;
    }

    return b;
}

console.log(fibonacci(3));

const fibonacciRecMy = (num) => {
    if(num <= 1) { 
        return num;    
    }

    let a = num - 1;
    let b = num - 2;

    return fibonacciRecMy(a) + fibonacciRecMy(b);
}
console.log(fibonacciRecMy(10));
console.log('====================================');

const gCache = {};
const fibonacciRecCache = (num, cache = {}) => {
    
    if(num <= 1) { 
        return num;    
    }

    let a = num - 1;
    let b = num - 2;

    if(gCache[num] !== undefined) {
        return gCache[num];
    }

    gCache[num] = fibonacciRecCache(a, gCache) + fibonacciRecCache(b, gCache);

    return gCache[num];
}

console.log(fibonacciRecCache(4));
console.log(gCache);


console.log('====================================');