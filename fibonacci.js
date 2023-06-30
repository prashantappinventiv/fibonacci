const generateFibonnaciSequence = (n) => {
    return [
        (arr = new Array(n).fill(1).reduce((arr, _, i) => {
            arr.push(i <= 1 ? 1 : arr[i - 2] + arr[i - 1]);
            return arr;
        }, [])),
        arr[n - 1],
    ];
};

const [fibonacciSequence, fibonacciNthNumber] = generateFibonnaciSequence(10);
console.log(fibonacciSequence,fibonacciNthNumber);
