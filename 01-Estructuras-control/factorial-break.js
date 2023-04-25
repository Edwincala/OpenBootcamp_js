let factorial = 1;
let i = 10;

while (i >= 0) {
    factorial *= i;
    i--;

    if (i === 0) {
        break;
    }
}

console.log(factorial);
