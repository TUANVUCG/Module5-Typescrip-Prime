function isPrime(number) {
    var isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    if (number >= 2) {
        for (var i = 2; i < Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
for (var i = 0; i < 1000; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
