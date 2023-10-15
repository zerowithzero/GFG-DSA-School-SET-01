// Q. Write a program to find the sum of the given series 1+2+3+ . . . . . .(N terms)

// Solution

function seriesSum(n) { // n = 5
    // By formula
    return n * ((n+1)/2)
};

const nth_sum = seriesSum(5);
// Output: 15
